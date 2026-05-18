namespace Belajar_C_
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btn1_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Halo?", "Apakah pesan ini muncul?", MessageBoxButtons.OK, MessageBoxIcon.Information);
        }
    }
}
