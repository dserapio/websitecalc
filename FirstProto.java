import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import java.awt.Color;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

import java.awt.Font;
import javax.swing.JTextField;
import javax.swing.JComboBox;
import javax.swing.JButton;
import javax.swing.DefaultComboBoxModel;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JTextArea;
import javax.swing.JCheckBox;
import javax.swing.JScrollPane;

public class FirstProto extends JFrame {

	private JPanel contentPane;
	private JTextField Qty;
	private JTextField lbs;
	private int glass;
	private int steel;
	private int battery;
	private int display;
	private int aluminum;
	private int circuit_board;
	private int plastics;
	private int other;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					FirstProto frame = new FirstProto();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public FirstProto() {
		
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 853, 409);
		contentPane = new JPanel();
		contentPane.setBackground(Color.WHITE);
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel lblModel = new JLabel("Model:");
		lblModel.setFont(new Font("Trebuchet MS", Font.BOLD, 14));
		lblModel.setBounds(89, 99, 67, 24);
		contentPane.add(lblModel);
		
		JLabel lblQty = new JLabel("Qty.");
		lblQty.setFont(new Font("Trebuchet MS", Font.BOLD, 14));
		lblQty.setBounds(89, 147, 67, 24);
		contentPane.add(lblQty);
		
		JLabel lblor = new JLabel("-OR-");
		lblor.setFont(new Font("Trebuchet MS", Font.BOLD, 14));
		lblor.setBounds(89, 182, 67, 24);
		contentPane.add(lblor);
		
		JLabel lblLbs = new JLabel("lbs.");
		lblLbs.setFont(new Font("Trebuchet MS", Font.BOLD, 14));
		lblLbs.setBounds(89, 217, 67, 24);
		contentPane.add(lblLbs);
		
		JComboBox models = new JComboBox();
		models.setModel(new DefaultComboBoxModel(new String[] {}));
		models.setBackground(Color.WHITE);
		models.setBounds(186, 99, 89, 22);
		contentPane.add(models);
		
		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(302, 11, 525, 348);
		contentPane.add(scrollPane);
		
		JTextArea textArea = new JTextArea();
		scrollPane.setColumnHeaderView(textArea);
		textArea.setBackground(Color.WHITE);
		textArea.setEditable(false);
		
		JCheckBox chckbxPhone = new JCheckBox("Phone");
		chckbxPhone.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				models.addItem("iPhone 8");
				models.addItem("Samsung Galaxy S9");
				models.addItem("iPhone 9");
				
				if(!chckbxPhone.isSelected()) {
					models.removeAllItems();
				}
			}
		});
		chckbxPhone.setBackground(Color.WHITE);
		chckbxPhone.setBounds(6, 40, 61, 23);
		contentPane.add(chckbxPhone);
		
		JCheckBox chckbxLaptop = new JCheckBox("Laptop");
		chckbxLaptop.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				models.addItem("Asus Something");
				models.addItem("Lenovo Something");
				models.addItem("MSI Something");
				
				if(!chckbxLaptop.isSelected()) {
					models.removeAllItems();
				}
			}
		});
		chckbxLaptop.setBackground(Color.WHITE);
		chckbxLaptop.setBounds(95, 40, 100, 23);
		contentPane.add(chckbxLaptop);
		
		JCheckBox chckbxMonitor = new JCheckBox("Monitor");
		chckbxMonitor.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				models.addItem("Asus Something");
				models.addItem("LG Something");
				models.addItem("Dell Something");
				
				if(!chckbxMonitor.isSelected()) {
					models.removeAllItems();
				}
			}
		});
		chckbxMonitor.setBackground(Color.WHITE);
		chckbxMonitor.setBounds(197, 40, 95, 23);
		contentPane.add(chckbxMonitor);
		
		Qty = new JTextField();
		Qty.setBackground(Color.WHITE);
		Qty.setBounds(189, 150, 86, 20);
		contentPane.add(Qty);
		Qty.setColumns(10);
		
		lbs = new JTextField();
		lbs.setBackground(Color.WHITE);
		lbs.setColumns(10);
		lbs.setBounds(189, 220, 86, 20);
		contentPane.add(lbs);
		
		JButton Calculate = new JButton("Calculate");
		Calculate.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if (Qty.getText().isEmpty()) {
					JOptionPane.showMessageDialog(null, "Fill in Qty. text Field");
				}
				else {
					if (models.getSelectedItem() == "iPhone 8") {
						glass = 44; //$0.10 per pound
						steel = 42; //$0.035 per pound
						battery = 37; //$2.50 per pound
						display = 33; //Not Sure
						aluminum = 16; //$0.30 per pound
						circuit_board = 15; //$3.00 per pound
						plastics = 8; //$0.52 per pound
						other = 7; //Not Sure
						
						Long Quantity = Long.parseLong(Qty.getText());
						double total = (0.10 * 0.097) * Quantity + (0.035 * 0.092) * Quantity + (2.50 * 0.081) * Quantity + (0.30 * 0.035) * Quantity + (3.00 * 0.033) * Quantity + (0.52 * 0.0176) * Quantity;
						
						textArea.append("Glass               " + glass + "  *  " + Qty.getText() + "  =  " + Quantity + "g" + "      Price  $" +  (0.10 * 0.097) * Quantity+ "\n");
						textArea.append("Steel                 " + steel + "  *  " + Qty.getText() + "  =  " + steel * Quantity + "g" + "   Price  $"+ (0.035 * 0.092) * Quantity + "\n");
						textArea.append("Battary              " + battery + "  *  " + Qty.getText() + "  =  " + battery * Quantity + "g" + "   Price  $"+ (2.50 * 0.081) * Quantity+ "\n");
						textArea.append("Display             " + display + "  *  " + Qty.getText() + "  =  " + display * Quantity + "g" + "   Price  $"+"\n");
						textArea.append("Aluminum        " + aluminum + "  *  " + Qty.getText() + "  =  " + aluminum * Quantity + "g" + "   Price  $"+ (0.30 * 0.035) * Quantity + "\n" );
						textArea.append("Circuit Board   " + circuit_board + "  *  " + Qty.getText() + "  =  " + circuit_board * Quantity + "g" + "   Price  $"+ (3.00 * 0.033) * Quantity + "\n");
						textArea.append("Plastics             " + plastics + "   *  " + Qty.getText() + "   =  " + plastics * Quantity + "g" + "    Price  $"+ (0.52 * 0.0176) * Quantity + "\n");
						textArea.append("Other                  " + other + "   *  " + Qty.getText() + "   =  " + other * Quantity + "g" + "    Price  $"+ "\n");
						textArea.append("===================Total==================\n");
						textArea.append("$" +Double.toString(total));
						
					}
				}
			}
		});
		Calculate.setBackground(Color.WHITE);
		Calculate.setBounds(140, 283, 89, 38);
		contentPane.add(Calculate);
		
	}
}
