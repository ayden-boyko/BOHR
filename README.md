
# BOHR (Bag Of Holding Resumes)

BOHR was created to streamline the application process. BOHR gives users the option to save application data (answers to questions, skills, etc). This data can then be autofilled for future resumes, drastically cutting down on application time.

> [!TIP]
> The more data a user saves, the more useful BOHR will be. As more applications are filled, the time spen on them will decrease. BOHR is what you make of it.
## Authors

- [@aydenboyko](https://www.github.com/ayden-boyko)


## Data

Data is saved as a json file as shown below. 
This way any user can alter their own json file to add or remove data.

```
{
  "personal info" : {
    "name": "John Smith",
    "email": ["Jsmith@gmail.com", "jmith@cornell.edu"],
    "phone number": 1234567890,
    "school": "Cornell university",
    "major": "Entomologist",
    "degree": "MD",
    "from": "08/2020",
    "to": "05/2026",
    "skills":["bug stuff", "documentation", "bug anatomy"],
    "websites": ["MyBugstuff.com"],
  },
  "address": {
    "street": "123 test street",
    "city": "New york",
    "state": "New York",
    "zipcode": 10001,
    "country": "United States"
  },
  "questions": {
    "Favorite bug": "wolf spider",
    "favorite species": "spiders. Natures balancers",
  },
  "experience": {
    "experience 1": {
      "name": "Natural History Museum",
      "role": "Entomologist Intern",
      "from": "07/2024",
      "to": "12/2024",
      "description" : "I studied and catalouged numerous bugs"
    },
  },
}
```
> [!NOTE]
> Json structure may vary, not everyone will save the same data for future applications. 
