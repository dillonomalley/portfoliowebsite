const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/projects.html'));
});

app.post('/projects', (req, res) => {
    const gantry = req.body.gantry ? true : false;
    const buttons = req.body.buttons ? true : false;
    res.render('index', { gantry, buttons });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


/*
app = Flask(__name__)
@app.route("/", methods=["GET", "POST", "POST1"])
@app.route("/front_page", methods=["GET", "POST"])
def home():
    if request.method=="POST":
        print("hello")
    else:
        return render_template("front_page.html")
@app.route("/about", methods=["GET", "POST"])
def about():
    if request.method=="POST":
        name = request.form.get("name")
        likeit = request.form.get("likeit")
        used = request.form.get("used")
        used1 = request.form.get("used1")
        used2 = request.form.get("used2")
        if used != "Yes": used = "No"
        if used1 != "Yes": used1 = "No"
        if used2 != "Yes": used2 = "No"
        print(used)
        return render_template("about.html", name=name, likeit=likeit, used=used, used1=used1, used2=used2)
    else:
        return render_template("about.html")
@app.route("/projects", methods=["GET", "POST"])
def projects():
    if request.method=="POST" and request.form.get("gantry")=="Yes":
        print("I AM HERE")
        return render_template("projects.html", gantry=1, buttons=0)
    elif request.method=="POST" and request.form.get("gantry")=="Off":
        print("I AM HERE2")
        return render_template("projects.html", gantry=0, buttons=1)
    else:
        return render_template("projects.html", gantry=0, buttons=0)
if __name__ == "__main__":
    app.run(debug=True)*/
