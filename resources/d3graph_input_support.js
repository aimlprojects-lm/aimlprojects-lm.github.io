var graph_support = {
	"nodes": [
		{"id": "covid", "group": 1},
		{"id": "coronavirus", "group": 1},
		{"id": "disease", "group": 1},
		{"id": "virus", "group": 1},
		{"id": "hospitalized", "group": 1},
		{"id": "potential", "group": 1},
		{"id": "severe", "group": 1},
		{"id": "result", "group": 1},
		{"id": "complications", "group": 1},
		{"id": "symptomatic", "group": 1},
		{"id": "fatal", "group": 1},
		{"id": "asymptomatic", "group": 1},
		{"id": "milde", "group": 1},
		{"id": "tested", "group": 1},
		{"id": "treated", "group": 1},
		{"id": "infection", "group": 1},
		{"id": "existing", "group": 1},
		{"id": "corona", "group": 1},
		{"id": "showing", "group": 1},
		{"id": "cance", "group": 1},
		{"id": "unknowingly", "group": 1},
		{"id": "positive", "group": 2},
		{"id": "negative", "group": 2},
		{"id": "results", "group": 2},
		{"id": "active", "group": 2},
		{"id": "antibody", "group": 2},
		{"id": "negatives", "group": 2},
		{"id": "test", "group": 2},
		{"id": "positives", "group": 2},
		{"id": "confirmed", "group": 2},
		{"id": "recovered", "group": 2},
		{"id": "awaiting", "group": 2},
		{"id": "antibodies", "group": 2},
		{"id": "refused", "group": 2},
		{"id": "quarantined", "group": 2},
		{"id": "recovering", "group": 2},
		{"id": "symptoms", "group": 2},
		{"id": "postive", "group": 2},
		{"id": "suspected", "group": 2},
		{"id": "confirm", "group": 2},
		{"id": "presumed", "group": 2},
		{"id": "html", "group": 3},
		{"id": "famp", "group": 3},
		{"id": "ncov", "group": 3},
		{"id": "nhs", "group": 3},
		{"id": "www", "group": 3},
		{"id": "gov", "group": 3},
		{"id": "cdc", "group": 3},
		{"id": "emergencies", "group": 3},
		{"id": "mit", "group": 3},
		{"id": "promote", "group": 3},
		{"id": "novel", "group": 3},
		{"id": "dol", "group": 3},
		{"id": "linked", "group": 3},
		{"id": "diseases", "group": 3},
		{"id": "tracke", "group": 3},
		{"id": "int", "group": 3},
		{"id": "intl", "group": 3},
		{"id": "smell", "group": 4},
		{"id": "taste", "group": 4},
		{"id": "throat", "group": 4},
		{"id": "sore", "group": 4},
		{"id": "appetite", "group": 4},
		{"id": "scratchy", "group": 4},
		{"id": "chest", "group": 4},
		{"id": "headache", "group": 4},
		{"id": "tickle", "group": 4},
		{"id": "pains", "group": 4},
		{"id": "itchy", "group": 4},
		{"id": "throats", "group": 4},
		{"id": "headaches", "group": 4},
		{"id": "aches", "group": 4},
		{"id": "burning", "group": 4},
		{"id": "slight", "group": 4},
		{"id": "tightness", "group": 4},
		{"id": "muscle", "group": 4},
		{"id": "nausea", "group": 4},
		{"id": "funky", "group": 4},
		{"id": "diarrhea", "group": 4},
		{"id": "symptom", "group": 6},
		{"id": "feve", "group": 6},
		{"id": "cough", "group": 6},
		{"id": "moderate", "group": 6},
		{"id": "pneumonia", "group": 6},
		{"id": "mild", "group": 6},
		{"id": "allergies", "group": 6},
		{"id": "signs", "group": 6},
		{"id": "illness", "group": 6},
		{"id": "asthma", "group": 6},
		{"id": "colds", "group": 6},
		{"id": "cold", "group": 6},
		{"id": "fevers", "group": 6},
		{"id": "false", "group": 7},
		{"id": "tests", "group": 7},
		{"id": "strep", "group": 7},
		{"id": "igm", "group": 7},
		{"id": "swab", "group": 7},
		{"id": "came", "group": 7}
	],
	"links": [
		{"source": "covid", "target": "coronavirus", "value": 3},
		{"source": "covid", "target": "disease", "value": 3},
		{"source": "covid", "target": "virus", "value": 2},
		{"source": "covid", "target": "hospitalized", "value": 2},
		{"source": "covid", "target": "potential", "value": 2},
		{"source": "covid", "target": "severe", "value": 2},
		{"source": "covid", "target": "result", "value": 2},
		{"source": "covid", "target": "complications", "value": 2},
		{"source": "covid", "target": "symptomatic", "value": 2},
		{"source": "covid", "target": "fatal", "value": 2},
		{"source": "covid", "target": "asymptomatic", "value": 2},
		{"source": "covid", "target": "milde", "value": 2},
		{"source": "covid", "target": "tested", "value": 2},
		{"source": "covid", "target": "treated", "value": 2},
		{"source": "covid", "target": "infection", "value": 2},
		{"source": "covid", "target": "existing", "value": 2},
		{"source": "covid", "target": "corona", "value": 2},
		{"source": "covid", "target": "showing", "value": 2},
		{"source": "covid", "target": "cance", "value": 2},
		{"source": "covid", "target": "unknowingly", "value": 2},
		{"source": "positive", "target": "negative", "value": 4},
		{"source": "positive", "target": "results", "value": 2},
		{"source": "positive", "target": "active", "value": 2},
		{"source": "positive", "target": "antibody", "value": 2},
		{"source": "positive", "target": "negatives", "value": 2},
		{"source": "positive", "target": "test", "value": 2},
		{"source": "positive", "target": "positives", "value": 2},
		{"source": "positive", "target": "confirmed", "value": 2},
		{"source": "positive", "target": "recovered", "value": 2},
		{"source": "positive", "target": "awaiting", "value": 2},
		{"source": "positive", "target": "antibodies", "value": 2},
		{"source": "positive", "target": "asymptomatic", "value": 2},
		{"source": "positive", "target": "refused", "value": 2},
		{"source": "positive", "target": "quarantined", "value": 2},
		{"source": "positive", "target": "recovering", "value": 2},
		{"source": "positive", "target": "symptoms", "value": 2},
		{"source": "positive", "target": "postive", "value": 2},
		{"source": "positive", "target": "suspected", "value": 2},
		{"source": "positive", "target": "confirm", "value": 2},
		{"source": "positive", "target": "presumed", "value": 2},
		{"source": "coronavirus", "target": "html", "value": 3},
		{"source": "coronavirus", "target": "covid", "value": 3},
		{"source": "coronavirus", "target": "famp", "value": 2},
		{"source": "coronavirus", "target": "ncov", "value": 2},
		{"source": "coronavirus", "target": "nhs", "value": 2},
		{"source": "coronavirus", "target": "www", "value": 2},
		{"source": "coronavirus", "target": "gov", "value": 2},
		{"source": "coronavirus", "target": "cdc", "value": 2},
		{"source": "coronavirus", "target": "emergencies", "value": 2},
		{"source": "coronavirus", "target": "mit", "value": 2},
		{"source": "coronavirus", "target": "promote", "value": 2},
		{"source": "coronavirus", "target": "novel", "value": 2},
		{"source": "coronavirus", "target": "dol", "value": 2},
		{"source": "coronavirus", "target": "linked", "value": 2},
		{"source": "coronavirus", "target": "diseases", "value": 2},
		{"source": "coronavirus", "target": "tracke", "value": 2},
		{"source": "coronavirus", "target": "potential", "value": 2},
		{"source": "coronavirus", "target": "int", "value": 2},
		{"source": "coronavirus", "target": "intl", "value": 2},
		{"source": "coronavirus", "target": "disease", "value": 2},
		{"source": "smell", "target": "taste", "value": 4},
		{"source": "smell", "target": "throat", "value": 3},
		{"source": "smell", "target": "sore", "value": 3},
		{"source": "smell", "target": "appetite", "value": 3},
		{"source": "smell", "target": "scratchy", "value": 3},
		{"source": "smell", "target": "chest", "value": 3},
		{"source": "smell", "target": "headache", "value": 3},
		{"source": "smell", "target": "tickle", "value": 3},
		{"source": "smell", "target": "pains", "value": 3},
		{"source": "smell", "target": "itchy", "value": 3},
		{"source": "smell", "target": "throats", "value": 3},
		{"source": "smell", "target": "headaches", "value": 3},
		{"source": "smell", "target": "aches", "value": 3},
		{"source": "smell", "target": "burning", "value": 3},
		{"source": "smell", "target": "slight", "value": 3},
		{"source": "smell", "target": "tightness", "value": 3},
		{"source": "smell", "target": "muscle", "value": 3},
		{"source": "smell", "target": "nausea", "value": 3},
		{"source": "smell", "target": "funky", "value": 3},
		{"source": "smell", "target": "diarrhea", "value": 3},
		{"source": "taste", "target": "smell", "value": 4},
		{"source": "taste", "target": "appetite", "value": 3},
		{"source": "taste", "target": "throat", "value": 3},
		{"source": "taste", "target": "sore", "value": 3},
		{"source": "taste", "target": "scratchy", "value": 3},
		{"source": "taste", "target": "chest", "value": 3},
		{"source": "taste", "target": "headache", "value": 3},
		{"source": "taste", "target": "tickle", "value": 3},
		{"source": "taste", "target": "itchy", "value": 3},
		{"source": "taste", "target": "funky", "value": 3},
		{"source": "taste", "target": "pains", "value": 3},
		{"source": "taste", "target": "slight", "value": 3},
		{"source": "taste", "target": "headaches", "value": 3},
		{"source": "taste", "target": "burning", "value": 3},
		{"source": "taste", "target": "aches", "value": 3},
		{"source": "taste", "target": "muscle", "value": 3},
		{"source": "taste", "target": "throats", "value": 3},
		{"source": "taste", "target": "tightness", "value": 3},
		{"source": "taste", "target": "nausea", "value": 3},
		{"source": "taste", "target": "diarrhea", "value": 3},
		{"source": "symptoms", "target": "symptom", "value": 3},
		{"source": "symptoms", "target": "feve", "value": 3},
		{"source": "symptoms", "target": "cough", "value": 3},
		{"source": "symptoms", "target": "moderate", "value": 3},
		{"source": "symptoms", "target": "pneumonia", "value": 3},
		{"source": "symptoms", "target": "mild", "value": 3},
		{"source": "symptoms", "target": "symptomatic", "value": 3},
		{"source": "symptoms", "target": "allergies", "value": 2},
		{"source": "symptoms", "target": "asymptomatic", "value": 2},
		{"source": "symptoms", "target": "signs", "value": 2},
		{"source": "symptoms", "target": "illness", "value": 2},
		{"source": "symptoms", "target": "recovered", "value": 2},
		{"source": "symptoms", "target": "asthma", "value": 2},
		{"source": "symptoms", "target": "colds", "value": 2},
		{"source": "symptoms", "target": "complications", "value": 2},
		{"source": "symptoms", "target": "hospitalized", "value": 2},
		{"source": "symptoms", "target": "cold", "value": 2},
		{"source": "symptoms", "target": "tested", "value": 2},
		{"source": "symptoms", "target": "test", "value": 2},
		{"source": "symptoms", "target": "fevers", "value": 2},
		{"source": "negative", "target": "positive", "value": 4},
		{"source": "negative", "target": "results", "value": 3},
		{"source": "negative", "target": "negatives", "value": 3},
		{"source": "negative", "target": "antibody", "value": 3},
		{"source": "negative", "target": "test", "value": 3},
		{"source": "negative", "target": "awaiting", "value": 3},
		{"source": "negative", "target": "false", "value": 3},
		{"source": "negative", "target": "result", "value": 2},
		{"source": "negative", "target": "positives", "value": 2},
		{"source": "negative", "target": "confirm", "value": 2},
		{"source": "negative", "target": "tests", "value": 2},
		{"source": "negative", "target": "antibodies", "value": 2},
		{"source": "negative", "target": "strep", "value": 2},
		{"source": "negative", "target": "igm", "value": 2},
		{"source": "negative", "target": "tested", "value": 2},
		{"source": "negative", "target": "symptoms", "value": 2},
		{"source": "negative", "target": "swab", "value": 2},
		{"source": "negative", "target": "recovered", "value": 2},
		{"source": "negative", "target": "presumed", "value": 2},
		{"source": "negative", "target": "came", "value": 2}
	]
}