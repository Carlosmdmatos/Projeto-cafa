import sqlite3
conn = sqlite3.connect("agenda.db")
cursor = conn.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS pessoas(nome,tel)")

while True:
    msg = "\nDigite 0 para sair"
    msg += "\nDigite 1 para inserir um registro"
    msg += "\nDigite 2 para obter o telefone a partir do nome"
    msg += "\nDigite 3 para obter o nome a partir do telefone"
    msg += "\nDigite 4 para obter todos os registros"
    msg += "\nSua opcao "
    i = int(input(msg))


    if i == 0:
        print("Obrigado por usar esse programa!")
        break
    elif i == 1:
        nome = input("Insira nome: ")
        tel = input("Insira telefone: ")
        cursor.execute("INSERT INTO pessoas(nome,tel) VALUES ('" + str(nome) + "', '" + str(tel) + "')")
        conn.commit()
    elif i == 2:
        nome = input("Insira o nome: ")
        for row in cursor.execute("SELECT tel FROM pessoas WHERE nome='" + nome + "'"): 
            print(row)
    elif i == 3:
        telefone = input("Insira o numero de telefone: ")
        for row in cursor.execute("SELECT nome FROM pessoas WHERE tel='" + telefone + "'"): 
            print(row)
    elif i == 4:
        for row in cursor.execute("SELECT * FROM pessoas"): 
            print(row)
    else:
        print("COMANDO INVALIDO")

conn.close()
