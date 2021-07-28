from flask import Flask, render_template, request, redirect


app = Flask(__name__)
itens = list()

@app.route('/')
def index():
   return render_template('index.html', titulo='porfolio-spanol', itens=itens)


@app.route('/new', methods=['POST', 'GET'])
def new():
   if request.method == 'POST':
      item = request.form['item'] 
      itens.append(item)
      return redirect('/') 

@app.route('/clear')
def clear():
   itens.clear()
   return redirect('/')

if __name__ == '__main__':
   app.run(debug=True)