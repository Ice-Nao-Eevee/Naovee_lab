import tkinter as tk

root = tk.Tk()
root.withdraw()

popup = tk.Toplevel()
popup.title("Pesan Evoly")
popup.geometry("400x200")

# Tambahkan ikon
popup.iconbitmap("naovee.ico")

label = tk.Label(popup, text="Halo Evoly!", font=("Arial", 20))
label.pack(expand=True)

button = tk.Button(popup, text="OK", font=("Arial", 16), command=popup.destroy)
button.pack(pady=10)

popup.mainloop()

# Cara menjalankan di Terminal VS Code:
# > python halo.py (Pastikan berada di direktori yang benar)
