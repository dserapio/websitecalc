import React, {
  useState, useReducer, useEffect, useRef, useMemo
} from 'react';
import { 
  Route, Redirect, Switch, useLocation, useHistory 
} from 'react-router-dom';

import { TransitionGroup } from 'react-transition-group';
import { FadeWrap } from '../utils/Transitions';
import { ContentWrap } from '../utils/Styles';
import { convertObj } from '../utils/UnitConvert';

import { toUrl } from '../Pages';
import Input from '../calc/Input';
import Results from '../calc/Results';

import recycle from '../../data/recycle-info.json';
import emissionData from '../../data/ghg-info.json';
import '../../App.css';


const innerPages = ['input', 'result', 'base'];
const getPaths = () => innerPages.reduce((dict, page) => (
  {...dict, [page]: toUrl(`/${page==='base' ? '' : page}`)}
), {});


export default function Calculator() {
  const paths = useMemo(getPaths, []);

  const [weight, setWeight]   = useState(false);
  const [unit, setUnit]       = useState( convertObj('kg') );
  const [inputs, setInputs]   = useReducer(setField, undefined, fieldStarts);
  const [results, setResults] = useState( {} );

  const location = useLocation();
  const history  = useHistory();
  const defsRef  = useRef();

  const tolbs = () => setUnit(convertObj('lbs'));
  const tokg  = () => setUnit(convertObj('kg'));

  const toResults = () => {
    setResults(findTotals(inputs, unit.convert, weight));
    history.push(paths.result);
  };
  const toBack    = () => history.replace(paths.input)

  const swapWeight = () => setWeight(weight => !weight)

  //remove dependency on inputs
  useEffect(() => {
    defsRef.current = () => (
      Object.entries(inputs).reduce((accumObj, [field, fieldObj]) => (
        {...accumObj, [field]: fieldObj.weight}  
      ), {})
    );
  }, [inputs]);

  //update default weight values when unit changed
  useEffect(() => {
    const defaults = defsRef.current();
    recycle.data.forEach(data => {
      const field = data.title;
      const weight = defaults[field];

      if (weight.value && weight.default)
        setInputs({
          type: 'weight', 
          field, 
          value: data.weight*unit.convert,
          default: true
        });
    });
  }, [unit]);

  
  return (
    <TransitionGroup>
      <FadeWrap key={location.key}>
        
        <Switch location={location}>

          <Route exact path={paths.input}>
            <ContentWrap>
              <Input inputs={inputs} setInputs={setInputs}
                unit={unit} tolbs={tolbs} tokg={tokg} 
                weight={weight} swapWeight={swapWeight}
                toResults={toResults}
              />
            </ContentWrap>
          </Route>

          <Route exact path={paths.result}>
            <ContentWrap>
              <Results values={results} 
                unit={unit} tolbs={tolbs} tokg={tokg} 
                toBack={toBack}
              />
            </ContentWrap>
          </Route>
          
          <Route path={paths.base}>
            <Redirect to={paths.input}/>
          </Route>
        </Switch>
        
      </FadeWrap>
    </TransitionGroup>
  );
}

export const fieldNames = recycle.data.map(data => data.title);
export const aggregates = ["GHG Emissions", "Total Input", "Total Output"];

const fieldStarts = (convert=1) => (
  recycle.data.reduce((obj, data) => ({
    ...obj, [data.title]: {
      amount: '',
      boxes: {
        default: true,
        value: '1'
      },
      weight: {
        default: true,
        value: data.weight ? data.weight*convert : ''
      }
    }
  }), {})
);


const setField = (inputs, action) => {
  switch(action.type) {
    case 'reset':
      return action.value
        ? fieldStarts(action.value)
        : fieldStarts();

    case 'amount':
      const aObj = inputs[action.field];
      aObj[action.type] = action.value;
      return {...inputs, [action.field]: aObj};

    case 'boxes':
    case 'weight':
      const obj = inputs[action.field];
      obj[action.type].value = action.value;
      obj[action.type].default = action.default;
      return {...inputs, [action.field]: obj};

    default:
      throw new Error();
  }
}


const findTotals = (inputs, convert, weightAmount=false) => {
  const [ghg, inTotals, outTotals] = aggregates;
  
  const totals = [...recycle.materials, ...aggregates]
    .reduce((obj, material) => ({...obj, [material]: 0}), {});

  recycle.data.forEach(data => {
    const obj = inputs[data.title];
    const weight = obj.weight.value;

    const amount = weightAmount
      ? obj.amount / weight
      : obj.amount;

    const unitRatio =  weight / (convert*data.weight);
    const materialAmnt = amount * unitRatio * obj.boxes.value;

    recycle.materials.forEach(material => {
      const weightYield = data[material] * materialAmnt
      totals[material] += weightYield;
      totals[outTotals] += weightYield;
    });

    totals[inTotals] += amount * weight;
    totals[ghg] += data[ghg] * obj.boxes.value;
  });

  Object.entries(emissionData.materials).forEach(([material, emission]) => {
    totals[ghg] += totals[material] * emission * 1000; //convert ton to kg
  });
  totals[ghg] *= emissionData.distance; //make from input

  return totals;
};
