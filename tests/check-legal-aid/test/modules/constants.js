'use strict';

exports.SAVINGS_THRESHOLD = 8000;
exports.VALUABLES_MINIMUM = 501;

exports.CATEGORIES_OF_LAW = [
  {
    value: 'clinneg',
    name: 'Clinical negligence',
    covered: false,
    headline: 'A legal adviser may be able to help you'
  },
  {
    value: 'commcare',
    name: 'Community care',
    covered: false,
    headline: 'A legal adviser may be able to help you'
  },
  {
    value: 'debt',
    name: 'Debt',
    covered: true,
    headline: ''
  },
  {
    value: 'discrimination',
    name: 'Discrimination',
    covered: true,
    headline: ''
  },
  {
    value: 'education',
    name: 'Education',
    covered: true,
    headline: ''
  },
  {
    value: 'family',
    name: 'Family',
    covered: true,
    headline: ''
  },
  {
    value: 'housing',
    name: 'Housing',
    covered: true,
    headline: ''
  },
  {
    value: 'immigration',
    name: 'Immigration and asylum',
    covered: false,
    headline: 'A legal adviser may be able to help you'
  },
  {
    value: 'mentalhealth',
    name: 'Mental health',
    covered: false,
    headline: 'A legal adviser may be able to help you'
  },
  {
    value: 'pi',
    name: 'Personal injury',
    covered: false,
    headline: 'Legal aid is not usually available for advice about personal injury'
  },
  {
    value: 'publiclaw',
    name: 'Public law',
    covered: false,
    headline: 'A legal adviser may be able to help you'
  },
  {
    value: 'aap',
    name: 'Trouble with the police',
    covered: false,
    headline: 'A legal adviser may be able to help you'
  },
  {
    value: 'violence',
    name: 'Domestic violence',
    covered: true,
    headline: ''
  },
  {
    value: 'benefits',
    name: 'Welfare benefits appeals',
    covered: true,
    headline: ''
  }
];

exports.SCOPE_PATHS = {
  debtInScope: {
    title: 'Debt in scope',
    type: 'inScope',
    nodes: ['Debt',
      'You’re a home owner, and you’re at risk of losing your home due to bankruptcy, mortgage debt or repossession']
  },
  debtOutOfScope: {
    title: 'Debt out of scope',
    type: 'outOfScope',
    nodes: ['Debt',
      'You owe money (for example, bank loans, credit card debt) but this is not putting your home at risk']
  },
  clinnegFaceToFace: {
    title: 'Clinical negligence',
    type: 'faceToFace',
    nodes: ['Clinical negligence']
  },
  domesticAbuseContact: {
    title: 'Domestic abuse',
    type: 'contact',
    nodes: ['Domestic abuse', 'Domestic abuse', 'Yes']
  },
  allInScope:{
	"n43n5/n43n4/n27/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Pregnancy or maternity", "While you were using a service"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Pregnancy or maternity -> While you were using a service",
	},
	"n43n7/n67/n43n4/n24/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Disability", "In an association"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Disability -> In an association"
	},
	"n43n5/n43n4/n25/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Gender, gender reassignment or sexual orientation", "At school or college"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Gender, gender reassignment or sexual orientation -> At school or college"
	},
	"n43n4/n27/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Pregnancy or maternity", "In an association"],
		"type": "inScope",
		"title": "Discrimination -> Pregnancy or maternity -> In an association"
	},
	"n43n7/n67/n89/n90/n82n13": {
		"category": "housing",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Your home is in a serious state of disrepair", "Yes"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Your home is in a serious state of disrepair -> Yes"
	},
	"n43n4/n27/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Pregnancy or maternity", "At school or college"],
		"type": "inScope",
		"title": "Discrimination -> Pregnancy or maternity -> At school or college"
	},
	"n43n8/n115/n82n15": {
		"category": "housing",
		"nodes": ["Immigration and asylum", "You\u2019re an asylum seeker applying for accommodation"],
		"type": "inScope",
		"title": "Immigration and asylum -> You\u2019re an asylum seeker applying for accommodation"
	},
	"n43n6/n43n4/n23/n37/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Age", "18 or over", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Age -> 18 or over -> When someone was carrying out a public function"
	},
	"n43n8/n86/n117/n82n15": {
		"category": "housing",
		"nodes": ["Immigration and asylum", "You\u2019re a victim of domestic violence", "No"],
		"type": "inScope",
		"title": "Immigration and asylum -> You\u2019re a victim of domestic violence -> No"
	},
	"n43n2/n1/n82n13": {
		"category": "housing",
		"nodes": ["Debt", "You\u2019re living in rented accommodation and you\u2019re being evicted because of a debt to your landlord"],
		"type": "inScope",
		"title": "Debt -> You\u2019re living in rented accommodation and you\u2019re being evicted because of a debt to your landlord"
	},
	"n43n14/n97/n47/n82n5": {
		"category": "family",
		"nodes": ["Family", "Domestic abuse or harassment", "Contesting an injunction"],
		"type": "inScope",
		"title": "Family -> Domestic abuse or harassment -> Contesting an injunction"
	},
	"n43n7/n67/n43n4/n27/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Pregnancy or maternity", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Pregnancy or maternity -> When someone was carrying out a public function"
	},
	"n43n6/n43n4/n23/n37/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Age", "18 or over", "At work"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Age -> 18 or over -> At work"
	},
	"n43n6/n43n4/n29/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Religion, belief, or lack of religion or belief", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Religion, belief, or lack of religion or belief -> When someone was carrying out a public function"
	},
	"n43n6/n43n4/n25/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Gender, gender reassignment or sexual orientation", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Gender, gender reassignment or sexual orientation -> When someone was carrying out a public function"
	},
	"n43n13/n43n4/n25/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Gender, gender reassignment or sexual orientation", "At school or college"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Gender, gender reassignment or sexual orientation -> At school or college"
	},
	"n43n7/n67/n43n4/n27/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Pregnancy or maternity", "While you were using a service"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Pregnancy or maternity -> While you were using a service"
	},
	"n43n7/n67/n83/n82n15": {
		"category": "housing",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Losing your accommodation"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Losing your accommodation"
	},
	"n43n4/n27/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Pregnancy or maternity", "At university"],
		"type": "inScope",
		"title": "Discrimination -> Pregnancy or maternity -> At university"
	},
	"n43n4/n23/n37/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Age", "18 or over", "While you were using a service"],
		"type": "inScope",
		"title": "Discrimination -> Age -> 18 or over -> While you were using a service"
	},
	"n43n5/n43n4/n28/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Race", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Race -> At home (in rented accommodation)"
	},
	"n43n4/n25/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Gender, gender reassignment or sexual orientation", "In an association"],
		"type": "inScope",
		"title": "Discrimination -> Gender, gender reassignment or sexual orientation -> In an association"
	},
	"n43n5/n43n4/n27/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Pregnancy or maternity", "At work"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Pregnancy or maternity -> At work"
	},
	"n43n7/n67/n43n4/n29/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Religion, belief, or lack of religion or belief", "While you were using a service"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Religion, belief, or lack of religion or belief -> While you were using a service"
	},
	"n43n4/n27/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Pregnancy or maternity", "While you were using a service"],
		"type": "inScope",
		"title": "Discrimination -> Pregnancy or maternity -> While you were using a service"
	},
	"n43n5/n43n4/n29/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Religion, belief, or lack of religion or belief", "At work"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Religion, belief, or lack of religion or belief -> At work"
	},
	"n43n5/n43n4/n28/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Race", "At school or college"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Race -> At school or college"
	},
	"n43n14/n105/n106/n59/n65/n82n20": {
		"category": "family",
		"nodes": ["Family", "Disputes over children", "You\u2019re in a dispute with your ex-partner over your children", "Family mediation", "Yes"],
		"type": "inScope",
		"title": "Family -> Disputes over children -> You\u2019re in a dispute with your ex-partner over your children -> Family mediation -> Yes"
	},
	"n43n5/n43n4/n27/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Pregnancy or maternity", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Pregnancy or maternity -> When someone was carrying out a public function"
	},
	"n43n7/n67/n43n4/n23/n37/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Age", "18 or over", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Age -> 18 or over -> When someone was carrying out a public function"
	},
	"n43n7/n67/n43n4/n25/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Gender, gender reassignment or sexual orientation", "While you were using a service"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Gender, gender reassignment or sexual orientation -> While you were using a service"
	},
	"n43n7/n67/n43n4/n25/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Gender, gender reassignment or sexual orientation", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Gender, gender reassignment or sexual orientation -> When someone was carrying out a public function"
	},
	"n43n2/n0/n82n3": {
		"category": "debt",
		"nodes": ["Debt", "You\u2019re a home owner, and you\u2019re at risk of losing your home due to bankruptcy, mortgage debt or repossession"],
		"type": "inScope",
		"title": "Debt -> You\u2019re a home owner, and you\u2019re at risk of losing your home due to bankruptcy, mortgage debt or repossession"
	},
	"n43n7/n67/n43n4/n24/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Disability", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Disability -> When someone was carrying out a public function"
	},
	"n43n7/n67/n43n4/n29/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Religion, belief, or lack of religion or belief", "In an association"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Religion, belief, or lack of religion or belief -> In an association"
	},
	"n43n4/n24/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Disability", "In an association"],
		"type": "inScope",
		"title": "Discrimination -> Disability -> In an association"
	},
	"n43n4/n29/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Religion, belief, or lack of religion or belief", "At school or college"],
		"type": "inScope",
		"title": "Discrimination -> Religion, belief, or lack of religion or belief -> At school or college"
	},
	"n43n7/n67/n43n4/n25/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Gender, gender reassignment or sexual orientation", "At work"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Gender, gender reassignment or sexual orientation -> At work"
	},
	"n43n13/n43n4/n25/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Gender, gender reassignment or sexual orientation", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Gender, gender reassignment or sexual orientation -> When someone was carrying out a public function"
	},
	"n43n7/n67/n43n4/n25/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Gender, gender reassignment or sexual orientation", "In an association"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Gender, gender reassignment or sexual orientation -> In an association"
	},
	"n43n6/n43n4/n29/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Religion, belief, or lack of religion or belief", "In an association"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Religion, belief, or lack of religion or belief -> In an association"
	},
	"n43n5/n43n4/n24/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Disability", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Disability -> At home (in rented accommodation)"
	},
	"n43n7/n67/n43n4/n28/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Race", "At work"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Race -> At work"
	},
	"n43n4/n24/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Disability", "While you were using a service"],
		"type": "inScope",
		"title": "Discrimination -> Disability -> While you were using a service"
	},
	"n43n7/n67/n43n4/n28/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Race", "At university"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Race -> At university"
	},
	"n43n5/n43n4/n28/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Race", "In an association"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Race -> In an association"
	},
	"n43n4/n28/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Race", "While you were using a service"],
		"type": "inScope",
		"title": "Discrimination -> Race -> While you were using a service"
	},
	"n43n6/n43n4/n27/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Pregnancy or maternity", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Pregnancy or maternity -> When someone was carrying out a public function"
	},
	"n43n5/n43n4/n23/n37/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Age", "18 or over", "At work"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Age -> 18 or over -> At work"
	},
	"n43n6/n43n4/n24/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Disability", "In an association"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Disability -> In an association"
	},
	"n43n4/n29/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Religion, belief, or lack of religion or belief", "At university"],
		"type": "inScope",
		"title": "Discrimination -> Religion, belief, or lack of religion or belief -> At university"
	},
	"n43n13/n43n4/n23/n37/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Age", "18 or over", "In an association"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Age -> 18 or over -> In an association"
	},
	"n43n13/n43n4/n23/n37/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Age", "18 or over", "While you were using a service"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Age -> 18 or over -> While you were using a service"
	},
	"n43n4/n25/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Gender, gender reassignment or sexual orientation", "At school or college"],
		"type": "inScope",
		"title": "Discrimination -> Gender, gender reassignment or sexual orientation -> At school or college"
	},
	"n43n7/n67/n43n4/n27/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Pregnancy or maternity", "At school or college"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Pregnancy or maternity -> At school or college"
	},
	"n43n13/n43n4/n29/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Religion, belief, or lack of religion or belief", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Religion, belief, or lack of religion or belief -> At home (in rented accommodation)"
	},
	"n43n6/n43n4/n28/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Race", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Race -> At home (in rented accommodation)"
	},
	"n43n7/n67/n43n4/n23/n37/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Age", "18 or over", "In an association"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Age -> 18 or over -> In an association"
	},
	"n43n4/n23/n37/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Age", "18 or over", "At work"],
		"type": "inScope",
		"title": "Discrimination -> Age -> 18 or over -> At work"
	},
	"n43n7/n67/n43n4/n28/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Race", "While you were using a service"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Race -> While you were using a service"
	},
	"n43n7/n92/n100/n82n13": {
		"category": "housing",
		"nodes": ["Housing", "You own your own home", "Yes"],
		"type": "inScope",
		"title": "Housing -> You own your own home -> Yes"
	},
	"n43n6/n43n4/n23/n37/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Age", "18 or over", "While you were using a service"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Age -> 18 or over -> While you were using a service"
	},
	"n43n6/n43n4/n29/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Religion, belief, or lack of religion or belief", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Religion, belief, or lack of religion or belief -> At home (in rented accommodation)"
	},
	"n43n7/n67/n43n4/n27/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Pregnancy or maternity", "At work"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Pregnancy or maternity -> At work"
	},
	"n43n13/n43n4/n28/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Race", "At school or college"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Race -> At school or college"
	},
	"n43n13/n43n4/n29/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Religion, belief, or lack of religion or belief", "In an association"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Religion, belief, or lack of religion or belief -> In an association"
	},
	"n43n7/n67/n43n4/n28/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Race", "In an association"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Race -> In an association"
	},
	"n43n6/n43n4/n28/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Race", "At school or college"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Race -> At school or college"
	},
	"n43n14/n97/n44/n19/n82n5": {
		"category": "family",
		"nodes": ["Family", "Domestic abuse or harassment", "Domestic abuse", "No"],
		"type": "inScope",
		"title": "Family -> Domestic abuse or harassment -> Domestic abuse -> No"
	},
	"n43n6/n43n4/n28/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Race", "In an association"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Race -> In an association"
	},
	"n43n13/n43n4/n29/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Religion, belief, or lack of religion or belief", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Religion, belief, or lack of religion or belief -> When someone was carrying out a public function"
	},
	"n43n6/n43n4/n29/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Religion, belief, or lack of religion or belief", "At school or college"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Religion, belief, or lack of religion or belief -> At school or college"
	},
	"n43n5/n43n4/n28/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Race", "At work"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Race -> At work"
	},
	"n43n7/n67/n70/n82n13": {
		"category": "housing",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Becoming homeless"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Becoming homeless"
	},
	"n43n13/n20/n87/n82n23": {
		"category": null,
		"nodes": ["Welfare benefits", "Benefits appeal", "On a point of law in the Upper Tribunal, Court of Appeal or Supreme Court"],
		"type": "inScope",
		"title": "Welfare benefits -> Benefits appeal -> On a point of law in the Upper Tribunal, Court of Appeal or Supreme Court"
	},
	"n43n5/n43n4/n24/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Disability", "At work"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Disability -> At work"
	},
	"n43n5/n40/n82n9": {
		"category": "education",
		"nodes": ["Education", "Special educational needs"],
		"type": "inScope",
		"title": "Education -> Special educational needs"
	},
	"n43n7/n67/n43n4/n27/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Pregnancy or maternity", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Pregnancy or maternity -> At home (in rented accommodation)"
	},
	"n43n6/n43n4/n27/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Pregnancy or maternity", "While you were using a service"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Pregnancy or maternity -> While you were using a service"
	},
	"n43n14/n59/n65/n82n20": {
		"category": "family",
		"nodes": ["Family", "Family mediation", "Yes"],
		"type": "inScope",
		"title": "Family -> Family mediation -> Yes"
	},
	"n43n3/n45/n19/n82n5": {
		"category": "family",
		"nodes": ["Domestic abuse", "Enforcing an injunction", "No"],
		"type": "inScope",
		"title": "Domestic abuse -> Enforcing an injunction -> No"
	},
	"n43n13/n43n4/n24/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Disability", "While you were using a service"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Disability -> While you were using a service"
	},
	"n43n4/n28/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Race", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Discrimination -> Race -> When someone was carrying out a public function"
	},
	"n43n14/n58/n64/n82n20": {
		"category": "family",
		"nodes": ["Family", "Financial settlement", "International Family Maintenance"],
		"type": "inScope",
		"title": "Family -> Financial settlement -> International Family Maintenance"
	},
	"n43n4/n28/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Race", "At university"],
		"type": "inScope",
		"title": "Discrimination -> Race -> At university"
	},
	"n43n7/n67/n43n4/n26/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Marriage or civil partnership", "At work"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Marriage or civil partnership -> At work"
	},
	"n43n5/n43n4/n29/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Religion, belief, or lack of religion or belief", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Religion, belief, or lack of religion or belief -> When someone was carrying out a public function"
	},
	"n43n7/n67/n43n4/n25/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Gender, gender reassignment or sexual orientation", "At university"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Gender, gender reassignment or sexual orientation -> At university"
	},
	"n43n13/n43n4/n25/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Gender, gender reassignment or sexual orientation", "At work"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Gender, gender reassignment or sexual orientation -> At work"
	},
	"n43n13/n43n4/n25/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Gender, gender reassignment or sexual orientation", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Gender, gender reassignment or sexual orientation -> At home (in rented accommodation)"
	},
	"n43n7/n67/n43n4/n24/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Disability", "While you were using a service"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Disability -> While you were using a service"
	},
	"n43n14/n58/n62/n19/n82n5": {
		"category": "family",
		"nodes": ["Family", "Financial settlement", "Domestic abuse", "No"],
		"type": "inScope",
		"title": "Family -> Financial settlement -> Domestic abuse -> No"
	},
	"n43n14/n97/n45/n19/n82n5": {
		"category": "family",
		"nodes": ["Family", "Domestic abuse or harassment", "Enforcing an injunction", "No"],
		"type": "inScope",
		"title": "Family -> Domestic abuse or harassment -> Enforcing an injunction -> No"
	},
	"n43n4/n27/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Pregnancy or maternity", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Discrimination -> Pregnancy or maternity -> At home (in rented accommodation)"
	},
	"n43n5/n43n4/n27/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Pregnancy or maternity", "At university"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Pregnancy or maternity -> At university"
	},
	"n43n5/n43n4/n25/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Gender, gender reassignment or sexual orientation", "While you were using a service"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Gender, gender reassignment or sexual orientation -> While you were using a service"
	},
	"n43n6/n43n4/n27/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Pregnancy or maternity", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Pregnancy or maternity -> At home (in rented accommodation)"
	},
	"n43n6/n43n4/n25/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Gender, gender reassignment or sexual orientation", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Gender, gender reassignment or sexual orientation -> At home (in rented accommodation)"
	},
	"n43n5/n43n4/n29/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Religion, belief, or lack of religion or belief", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Religion, belief, or lack of religion or belief -> At home (in rented accommodation)"
	},
	"n43n5/n43n4/n25/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Gender, gender reassignment or sexual orientation", "At university"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Gender, gender reassignment or sexual orientation -> At university"
	},
	"n43n4/n26/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Marriage or civil partnership", "At work"],
		"type": "inScope",
		"title": "Discrimination -> Marriage or civil partnership -> At work"
	},
	"n43n4/n27/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Pregnancy or maternity", "At work"],
		"type": "inScope",
		"title": "Discrimination -> Pregnancy or maternity -> At work"
	},
	"n43n7/n67/n43n4/n29/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Religion, belief, or lack of religion or belief", "At work"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Religion, belief, or lack of religion or belief -> At work"
	},
	"n43n7/n67/n73/n11/n82n13": {
		"category": "housing",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Contesting an injunction for antisocial behaviour", "A social housing landlord"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Contesting an injunction for antisocial behaviour -> A social housing landlord"
	},
	"n43n3/n47/n82n5": {
		"category": "family",
		"nodes": ["Domestic abuse", "Contesting an injunction"],
		"type": "inScope",
		"title": "Domestic abuse -> Contesting an injunction"
	},
	"n43n4/n25/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Gender, gender reassignment or sexual orientation", "At university"],
		"type": "inScope",
		"title": "Discrimination -> Gender, gender reassignment or sexual orientation -> At university"
	},
	"n43n5/n43n4/n28/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Race", "While you were using a service"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Race -> While you were using a service"
	},
	"n43n6/n43n4/n29/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Religion, belief, or lack of religion or belief", "At work"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Religion, belief, or lack of religion or belief -> At work"
	},
	"n43n4/n25/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Gender, gender reassignment or sexual orientation", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Discrimination -> Gender, gender reassignment or sexual orientation -> At home (in rented accommodation)"
	},
	"n43n5/n43n4/n27/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Pregnancy or maternity", "At school or college"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Pregnancy or maternity -> At school or college"
	},
	"n43n6/n43n4/n27/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Pregnancy or maternity", "At school or college"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Pregnancy or maternity -> At school or college"
	},
	"n43n13/n43n4/n27/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Pregnancy or maternity", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Pregnancy or maternity -> At home (in rented accommodation)"
	},
	"n43n5/n43n4/n25/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Gender, gender reassignment or sexual orientation", "In an association"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Gender, gender reassignment or sexual orientation -> In an association"
	},
	"n43n4/n23/n37/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Age", "18 or over", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Discrimination -> Age -> 18 or over -> When someone was carrying out a public function"
	},
	"n43n5/n43n4/n24/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Disability", "At university"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Disability -> At university"
	},
	"n43n5/n43n4/n29/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Religion, belief, or lack of religion or belief", "At university"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Religion, belief, or lack of religion or belief -> At university"
	},
	"n43n5/n43n4/n24/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Disability", "While you were using a service"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Disability -> While you were using a service"
	},
	"n43n6/n43n4/n25/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Gender, gender reassignment or sexual orientation", "At school or college"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Gender, gender reassignment or sexual orientation -> At school or college"
	},
	"n43n13/n43n4/n29/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Religion, belief, or lack of religion or belief", "At work"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Religion, belief, or lack of religion or belief -> At work"
	},
	"n43n6/n43n4/n28/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Race", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Race -> When someone was carrying out a public function"
	},
	"n43n7/n67/n43n4/n27/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Pregnancy or maternity", "In an association"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Pregnancy or maternity -> In an association"
	},
	"n43n13/n43n4/n28/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Race", "At work"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Race -> At work"
	},
	"n43n7/n67/n43n4/n23/n37/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Age", "18 or over", "At work"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Age -> 18 or over -> At work"
	},
	"n43n6/n43n4/n28/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Race", "While you were using a service"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Race -> While you were using a service"
	},
	"n43n13/n43n4/n23/n37/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Age", "18 or over", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Age -> 18 or over -> When someone was carrying out a public function"
	},
	"n43n13/n43n4/n25/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Gender, gender reassignment or sexual orientation", "While you were using a service"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Gender, gender reassignment or sexual orientation -> While you were using a service"
	},
	"n43n6/n43n4/n25/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Gender, gender reassignment or sexual orientation", "In an association"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Gender, gender reassignment or sexual orientation -> In an association"
	},
	"n43n6/n43n4/n28/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Race", "At work"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Race -> At work"
	},
	"n43n5/n43n4/n25/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Gender, gender reassignment or sexual orientation", "At work"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Gender, gender reassignment or sexual orientation -> At work"
	},
	"n43n4/n28/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Race", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Discrimination -> Race -> At home (in rented accommodation)"
	},
	"n43n4/n29/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Religion, belief, or lack of religion or belief", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Discrimination -> Religion, belief, or lack of religion or belief -> At home (in rented accommodation)"
	},
	"n43n4/n24/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Disability", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Discrimination -> Disability -> When someone was carrying out a public function"
	},
	"n43n6/n43n4/n27/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Pregnancy or maternity", "In an association"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Pregnancy or maternity -> In an association"
	},
	"n43n3/n48/n82n5": {
		"category": "family",
		"nodes": ["Domestic abuse", "Forced marriage"],
		"type": "inScope",
		"title": "Domestic abuse -> Forced marriage"
	},
	"n43n5/n43n4/n29/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Religion, belief, or lack of religion or belief", "While you were using a service"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Religion, belief, or lack of religion or belief -> While you were using a service"
	},
	"n43n6/n43n4/n27/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Pregnancy or maternity", "At university"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Pregnancy or maternity -> At university"
	},
	"n43n5/n43n4/n23/n37/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Age", "18 or over", "In an association"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Age -> 18 or over -> In an association"
	},
	"n43n13/n21/n82n23": {
		"category": null,
		"nodes": ["Welfare benefits", "Permission to appeal refused"],
		"type": "inScope",
		"title": "Welfare benefits -> Permission to appeal refused"
	},
	"n43n6/n43n4/n24/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Disability", "At work"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Disability -> At work"
	},
	"n43n7/n67/n43n4/n23/n37/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Age", "18 or over", "While you were using a service"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Age -> 18 or over -> While you were using a service"
	},
	"n43n5/n43n4/n27/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Pregnancy or maternity", "In an association"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Pregnancy or maternity -> In an association"
	},
	"n43n14/n97/n48/n82n5": {
		"category": "family",
		"nodes": ["Family", "Domestic abuse or harassment", "Forced marriage"],
		"type": "inScope",
		"title": "Family -> Domestic abuse or harassment -> Forced marriage"
	},
	"n43n7/n114/n82n13": {
		"category": "housing",
		"nodes": ["Housing", "You\u2019re an asylum seeker applying for accommodation"],
		"type": "inScope",
		"title": "Housing -> You\u2019re an asylum seeker applying for accommodation"
	},
	"n43n13/n43n4/n26/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Marriage or civil partnership", "At work"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Marriage or civil partnership -> At work"
	},
	"n43n7/n67/n43n4/n29/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Religion, belief, or lack of religion or belief", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Religion, belief, or lack of religion or belief -> When someone was carrying out a public function"
	},
	"n43n6/n43n4/n24/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Disability", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Disability -> At home (in rented accommodation)"
	},
	"n43n6/n149/n82n33": {
		"category": "employment",
		"nodes": ["Employment", "You\u2019re a victim of human trafficking or modern slavery"],
		"type": "inScope",
		"title": "Employment -> You\u2019re a victim of human trafficking or modern slavery"
	},
	"n43n13/n43n4/n27/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Pregnancy or maternity", "While you were using a service"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Pregnancy or maternity -> While you were using a service"
	},
	"n43n13/n43n4/n27/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Pregnancy or maternity", "At work"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Pregnancy or maternity -> At work"
	},
	"n43n4/n28/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Race", "In an association"],
		"type": "inScope",
		"title": "Discrimination -> Race -> In an association"
	},
	"n43n5/n43n4/n25/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Gender, gender reassignment or sexual orientation", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Gender, gender reassignment or sexual orientation -> When someone was carrying out a public function"
	},
	"n43n8/n118/n82n15": {
		"category": "housing",
		"nodes": ["Immigration and asylum", "You\u2019re losing your accommodation because UK Visas and Immigration (UKVI) is refusing to support you or is withdrawing its support from you"],
		"type": "inScope",
		"title": "Immigration and asylum -> You\u2019re losing your accommodation because UK Visas and Immigration (UKVI) is refusing to support you or is withdrawing its support from you"
	},
	"n43n13/n43n4/n28/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Race", "In an association"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Race -> In an association"
	},
	"n43n5/n43n4/n23/n37/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Age", "18 or over", "At university"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Age -> 18 or over -> At university"
	},
	"n43n5/n43n4/n24/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Disability", "At school or college"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Disability -> At school or college"
	},
	"n43n13/n43n4/n24/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Disability", "At university"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Disability -> At university"
	},
	"n43n6/n43n4/n25/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Gender, gender reassignment or sexual orientation", "At university"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Gender, gender reassignment or sexual orientation -> At university"
	},
	"n43n4/n24/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Disability", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Discrimination -> Disability -> At home (in rented accommodation)"
	},
	"n43n13/n43n4/n23/n37/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Age", "18 or over", "At work"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Age -> 18 or over -> At work"
	},
	"n43n14/n58/n59/n65/n82n20": {
		"category": "family",
		"nodes": ["Family", "Financial settlement", "Family mediation", "Yes"],
		"type": "inScope",
		"title": "Family -> Financial settlement -> Family mediation -> Yes"
	},
	"n43n7/n67/n43n4/n28/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Race", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Race -> At home (in rented accommodation)"
	},
	"n43n4/n29/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Religion, belief, or lack of religion or belief", "In an association"],
		"type": "inScope",
		"title": "Discrimination -> Religion, belief, or lack of religion or belief -> In an association"
	},
	"n43n13/n43n4/n24/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Disability", "At work"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Disability -> At work"
	},
	"n43n13/n43n4/n24/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Disability", "In an association"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Disability -> In an association"
	},
	"n43n7/n67/n43n4/n25/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Gender, gender reassignment or sexual orientation", "At school or college"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Gender, gender reassignment or sexual orientation -> At school or college"
	},
	"n43n6/n43n4/n24/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Disability", "At university"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Disability -> At university"
	},
	"n43n13/n43n4/n28/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Race", "At university"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Race -> At university"
	},
	"n43n3/n104/n19/n82n5": {
		"category": "family",
		"nodes": ["Domestic abuse", "Female genital mutilation", "No"],
		"type": "inScope",
		"title": "Domestic abuse -> Female genital mutilation -> No"
	},
	"n43n5/n43n4/n28/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Race", "At university"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Race -> At university"
	},
	"n43n13/n43n4/n25/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Gender, gender reassignment or sexual orientation", "In an association"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Gender, gender reassignment or sexual orientation -> In an association"
	},
	"n43n5/n43n4/n24/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Disability", "In an association"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Disability -> In an association"
	},
	"n43n6/n43n4/n29/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Religion, belief, or lack of religion or belief", "At university"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Religion, belief, or lack of religion or belief -> At university"
	},
	"n43n4/n24/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Disability", "At school or college"],
		"type": "inScope",
		"title": "Discrimination -> Disability -> At school or college"
	},
	"n43n7/n67/n43n4/n27/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Pregnancy or maternity", "At university"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Pregnancy or maternity -> At university"
	},
	"n43n3/n44/n19/n82n5": {
		"category": "family",
		"nodes": ["Domestic abuse", "Domestic abuse", "No"],
		"type": "inScope",
		"title": "Domestic abuse -> Domestic abuse -> No"
	},
	"n43n14/n56/n62/n19/n82n5": {
		"category": "family",
		"nodes": ["Family", "Divorce, separation or dissolution", "Domestic abuse", "No"],
		"type": "inScope",
		"title": "Family -> Divorce, separation or dissolution -> Domestic abuse -> No"
	},
	"n43n5/n43n4/n29/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Religion, belief, or lack of religion or belief", "In an association"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Religion, belief, or lack of religion or belief -> In an association"
	},
	"n43n14/n105/n107/n108/n82n20": {
		"category": "family",
		"nodes": ["Family", "Disputes over children", "You\u2019re a relative (for example, a grandparent) seeking contact with a child in your family", "Yes"],
		"type": "inScope",
		"title": "Family -> Disputes over children -> You\u2019re a relative (for example, a grandparent) seeking contact with a child in your family -> Yes"
	},
	"n43n4/n29/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Religion, belief, or lack of religion or belief", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Discrimination -> Religion, belief, or lack of religion or belief -> When someone was carrying out a public function"
	},
	"n43n7/n67/n43n4/n29/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Religion, belief, or lack of religion or belief", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Religion, belief, or lack of religion or belief -> At home (in rented accommodation)"
	},
	"n43n3/n46/n19/n82n5": {
		"category": "family",
		"nodes": ["Domestic abuse", "Harassment", "No"],
		"type": "inScope",
		"title": "Domestic abuse -> Harassment -> No"
	},
	"n43n4/n28/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Race", "At work"],
		"type": "inScope",
		"title": "Discrimination -> Race -> At work"
	},
	"n43n6/n43n4/n27/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Pregnancy or maternity", "At work"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Pregnancy or maternity -> At work"
	},
	"n43n5/n43n4/n23/n37/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Age", "18 or over", "While you were using a service"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Age -> 18 or over -> While you were using a service"
	},
	"n43n6/n43n4/n26/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Marriage or civil partnership", "At work"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Marriage or civil partnership -> At work"
	},
	"n43n8/n88/n82n15": {
		"category": "housing",
		"nodes": ["Immigration and asylum", "You\u2019re a victim of human trafficking or modern slavery"],
		"type": "inScope",
		"title": "Immigration and asylum -> You\u2019re a victim of human trafficking or modern slavery"
	},
	"n43n6/n43n4/n24/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Disability", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Disability -> When someone was carrying out a public function"
	},
	"n43n5/n43n4/n23/n37/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Age", "18 or over", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Age -> 18 or over -> When someone was carrying out a public function"
	},
	"n43n6/n43n4/n25/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Gender, gender reassignment or sexual orientation", "At work"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Gender, gender reassignment or sexual orientation -> At work"
	},
	"n43n13/n43n4/n29/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Religion, belief, or lack of religion or belief", "At school or college"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Religion, belief, or lack of religion or belief -> At school or college"
	},
	"n43n7/n67/n43n4/n24/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Disability", "At school or college"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Disability -> At school or college"
	},
	"n43n13/n43n4/n27/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Pregnancy or maternity", "At university"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Pregnancy or maternity -> At university"
	},
	"n43n7/n67/n43n4/n24/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Disability", "At university"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Disability -> At university"
	},
	"n43n13/n43n4/n29/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Religion, belief, or lack of religion or belief", "While you were using a service"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Religion, belief, or lack of religion or belief -> While you were using a service"
	},
	"n43n5/n43n4/n26/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Marriage or civil partnership", "At work"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Marriage or civil partnership -> At work"
	},
	"n43n6/n43n4/n25/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Gender, gender reassignment or sexual orientation", "While you were using a service"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Gender, gender reassignment or sexual orientation -> While you were using a service"
	},
	"n43n6/n43n4/n24/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Disability", "At school or college"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Disability -> At school or college"
	},
	"n43n14/n56/n59/n65/n82n20": {
		"category": "family",
		"nodes": ["Family", "Divorce, separation or dissolution", "Family mediation", "Yes"],
		"type": "inScope",
		"title": "Family -> Divorce, separation or dissolution -> Family mediation -> Yes"
	},
	"n43n4/n23/n37/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Age", "18 or over", "At university"],
		"type": "inScope",
		"title": "Discrimination -> Age -> 18 or over -> At university"
	},
	"n43n5/n43n4/n28/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Race", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Race -> When someone was carrying out a public function"
	},
	"n43n5/n43n4/n27/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Pregnancy or maternity", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Pregnancy or maternity -> At home (in rented accommodation)"
	},
	"n43n4/n27/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Pregnancy or maternity", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Discrimination -> Pregnancy or maternity -> When someone was carrying out a public function"
	},
	"n43n14/n105/n106/n62/n19/n82n5": {
		"category": "family",
		"nodes": ["Family", "Disputes over children", "You\u2019re in a dispute with your ex-partner over your children", "Domestic abuse", "No"],
		"type": "inScope",
		"title": "Family -> Disputes over children -> You\u2019re in a dispute with your ex-partner over your children -> Domestic abuse -> No"
	},
	"n43n13/n43n4/n24/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Disability", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Disability -> When someone was carrying out a public function"
	},
	"n43n13/n43n4/n28/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Race", "While you were using a service"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Race -> While you were using a service"
	},
	"n43n7/n67/n43n4/n28/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Race", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Race -> When someone was carrying out a public function"
	},
	"n43n7/n68/n82n13": {
		"category": "housing",
		"nodes": ["Housing", "You are homeless"],
		"type": "inScope",
		"title": "Housing -> You are homeless"
	},
	"n43n7/n67/n43n4/n28/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Race", "At school or college"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Race -> At school or college"
	},
	"n43n4/n25/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Gender, gender reassignment or sexual orientation", "While you were using a service"],
		"type": "inScope",
		"title": "Discrimination -> Gender, gender reassignment or sexual orientation -> While you were using a service"
	},
	"n43n6/n43n4/n23/n37/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Age", "18 or over", "In an association"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Age -> 18 or over -> In an association"
	},
	"n43n13/n43n4/n23/n37/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Age", "18 or over", "At university"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Age -> 18 or over -> At university"
	},
	"n43n7/n67/n43n4/n25/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Gender, gender reassignment or sexual orientation", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Gender, gender reassignment or sexual orientation -> At home (in rented accommodation)"
	},
	"n43n7/n67/n43n4/n23/n37/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Age", "18 or over", "At university"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Age -> 18 or over -> At university"
	},
	"n43n4/n23/n37/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Age", "18 or over", "In an association"],
		"type": "inScope",
		"title": "Discrimination -> Age -> 18 or over -> In an association"
	},
	"n43n4/n24/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Disability", "At university"],
		"type": "inScope",
		"title": "Discrimination -> Disability -> At university"
	},
	"n43n7/n67/n43n4/n29/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Religion, belief, or lack of religion or belief", "At university"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Religion, belief, or lack of religion or belief -> At university"
	},
	"n43n13/n43n4/n27/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Pregnancy or maternity", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Pregnancy or maternity -> When someone was carrying out a public function"
	},
	"n43n7/n67/n71/n82n13": {
		"category": "housing",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Eviction"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Eviction"
	},
	"n43n6/n43n4/n23/n37/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Age", "18 or over", "At university"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Age -> 18 or over -> At university"
	},
	"n43n13/n43n4/n24/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Disability", "At school or college"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Disability -> At school or college"
	},
	"n43n14/n97/n104/n19/n82n5": {
		"category": "family",
		"nodes": ["Family", "Domestic abuse or harassment", "Female genital mutilation", "No"],
		"type": "inScope",
		"title": "Family -> Domestic abuse or harassment -> Female genital mutilation -> No"
	},
	"n43n7/n67/n43n4/n29/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Religion, belief, or lack of religion or belief", "At school or college"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Religion, belief, or lack of religion or belief -> At school or college"
	},
	"n43n8/n84/n82n15": {
		"category": "housing",
		"nodes": ["Immigration and asylum", "You want advice on seeking asylum or appealing a decision about your asylum"],
		"type": "inScope",
		"title": "Immigration and asylum -> You want advice on seeking asylum or appealing a decision about your asylum"
	},
	"n43n7/n67/n72/n82n13": {
		"category": "housing",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Harassment"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Harassment"
	},
	"n43n4/n25/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Gender, gender reassignment or sexual orientation", "At work"],
		"type": "inScope",
		"title": "Discrimination -> Gender, gender reassignment or sexual orientation -> At work"
	},
	"n43n4/n25/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Gender, gender reassignment or sexual orientation", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Discrimination -> Gender, gender reassignment or sexual orientation -> When someone was carrying out a public function"
	},
	"n43n4/n24/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Disability", "At work"],
		"type": "inScope",
		"title": "Discrimination -> Disability -> At work"
	},
	"n43n4/n29/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Religion, belief, or lack of religion or belief", "At work"],
		"type": "inScope",
		"title": "Discrimination -> Religion, belief, or lack of religion or belief -> At work"
	},
	"n43n13/n43n4/n24/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Disability", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Disability -> At home (in rented accommodation)"
	},
	"n43n6/n43n4/n29/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Religion, belief, or lack of religion or belief", "While you were using a service"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Religion, belief, or lack of religion or belief -> While you were using a service"
	},
	"n43n7/n67/n43n4/n24/n31/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Disability", "At work"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Disability -> At work"
	},
	"n43n13/n43n4/n28/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Race", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Race -> At home (in rented accommodation)"
	},
	"n43n5/n43n4/n25/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Gender, gender reassignment or sexual orientation", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Gender, gender reassignment or sexual orientation -> At home (in rented accommodation)"
	},
	"n43n6/n43n4/n28/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Race", "At university"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Race -> At university"
	},
	"n43n4/n29/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Religion, belief, or lack of religion or belief", "While you were using a service"],
		"type": "inScope",
		"title": "Discrimination -> Religion, belief, or lack of religion or belief -> While you were using a service"
	},
	"n43n13/n43n4/n27/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Pregnancy or maternity", "At school or college"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Pregnancy or maternity -> At school or college"
	},
	"n43n5/n43n4/n24/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Disability", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Disability -> When someone was carrying out a public function"
	},
	"n43n14/n97/n46/n19/n82n5": {
		"category": "family",
		"nodes": ["Family", "Domestic abuse or harassment", "Harassment", "No"],
		"type": "inScope",
		"title": "Family -> Domestic abuse or harassment -> Harassment -> No"
	},
	"n43n7/n67/n43n4/n24/n112/n82n7": {
		"category": "discrimination",
		"nodes": ["Housing", "You\u2019re living in rented accommodation", "Discrimination", "Disability", "At home (in rented accommodation)"],
		"type": "inScope",
		"title": "Housing -> You\u2019re living in rented accommodation -> Discrimination -> Disability -> At home (in rented accommodation)"
	},
	"n43n13/n43n4/n25/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Gender, gender reassignment or sexual orientation", "At university"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Gender, gender reassignment or sexual orientation -> At university"
	},
	"n43n13/n43n4/n28/n34/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Race", "When someone was carrying out a public function"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Race -> When someone was carrying out a public function"
	},
	"n43n13/n43n4/n29/n36/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Religion, belief, or lack of religion or belief", "At university"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Religion, belief, or lack of religion or belief -> At university"
	},
	"n43n6/n43n4/n24/n32/n82n7": {
		"category": "discrimination",
		"nodes": ["Employment", "Discrimination", "Disability", "While you were using a service"],
		"type": "inScope",
		"title": "Employment -> Discrimination -> Disability -> While you were using a service"
	},
	"n43n13/n43n4/n27/n33/n82n7": {
		"category": "discrimination",
		"nodes": ["Welfare benefits", "Discrimination", "Pregnancy or maternity", "In an association"],
		"type": "inScope",
		"title": "Welfare benefits -> Discrimination -> Pregnancy or maternity -> In an association"
	},
	"n43n5/n43n4/n29/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Education", "Discrimination", "Religion, belief, or lack of religion or belief", "At school or college"],
		"type": "inScope",
		"title": "Education -> Discrimination -> Religion, belief, or lack of religion or belief -> At school or college"
	},
	"n43n14/n50/n55/n82n20": {
		"category": "family",
		"nodes": ["Family", "Children being taken into care and adoption", "No"],
		"type": "inScope",
		"title": "Family -> Children being taken into care and adoption -> No"
	},
	"n43n4/n28/n35/n82n7": {
		"category": "discrimination",
		"nodes": ["Discrimination", "Race", "At school or college"],
		"type": "inScope",
		"title": "Discrimination -> Race -> At school or college"
	}
}
};

exports.ABOUT_YOU_QUESTIONS = [
  'have_partner',
  'in_dispute',
  'on_benefits',
  'have_children',
  'have_dependants',
  'have_savings',
  'have_valuables',
  'own_property',
  'is_employed',
  'is_self_employed',
  'aged_60_or_over'
];

exports.PROPERTY_QUESTIONS = [
  'properties-0-is_main_home',
  'properties-0-other_shareholders',
  'properties-0-is_rented',
  'properties-0-in_dispute'
];

exports.BENEFITS = [
  'income_support',
  'job_seekers_allowance',
  'pension_credit',
  'universal_credit',
  'employment_support',
  'other-benefit'
];

exports.SAVINGS_QUESTIONS = {
  MONEY: [
    {
      name: 'savings',
      errorText: 'Enter 0 if you have no savings'
    },
    {
      name: 'investments',
      errorText: 'Enter 0 if you have no investments'
    }
  ],
  VALUABLES: [
    {
      name: 'valuables',
      errorText: 'Enter 0 if you have no valuable items worth over £500 each'
    }
  ]
};

exports.EMPLOYMENT_QUESTIONS = {
  COMMON: [
    'maintenance',
    'pension',
    'other_income'
  ],
  EMPLOYED_MANDATORY: [
    'earnings',
    'income_tax',
    'national_insurance'
  ],
  EMPLOYED_OPTIONAL: [
    'working_tax_credit'
  ]
};

exports.OUTGOINGS_QUESTIONS = [
  'rent',
  'maintenance',
  'childcare'
];

exports.INELIGIBLE_OUTCOMES = [
  {
    category: {
      label: 'Debt',
      value: 'debt'
    },
    link: {
      text: 'Advice Guide',
      href: 'http://www.adviceguide.org.uk'
    }
  },
  {
    category: {
      label: 'Domestic violence',
      value: 'violence'
    },
    link: {
      text: 'Child Maintenance Options',
      href: 'http://www.cmoptions.org/'
    }
  },
  {
    category: {
      label: 'Discrimination',
      value: 'discrimination'
    },
    link: {
      text: 'Equality Advisory Support Service',
      href: 'http://www.equalityadvisoryservice.com/'
    }
  },
  {
    category: {
      label: 'Education',
      value: 'education'
    },
    link: {
      text: 'Independent Parental Special Education Advice (IPSEA)',
      href: 'http://www.ipsea.org.uk'
    }
  },
  {
    category: {
      label: 'Family',
      value: 'family'
    },
    link: {
      text: 'Child Maintenance Options',
      href: 'http://www.cmoptions.org/'
    }
  },
  {
    category: {
      label: 'Housing',
      value: 'housing'
    },
    link: {
      text: 'Law Centre Network',
      href: 'http://www.lawcentres.org.uk/'
    }
  },
  {
    category: {
      label: 'Welfare benefits',
      value: 'benefits'
    },
    link: {
      text: 'Advice Guide',
      href: 'http://www.adviceguide.org.uk'
    }
  }
];

exports.FORM_IDENTIFIERS = {
  'problem': 'input[name="categories"]',
  'about': 'input[name="have_partner"]',
  'benefits': 'input[name="benefits"][value="other-benefit"]',
  'additional-benefits': 'input[name="other_benefits"]',
  'property': 'input[name="properties-0-is_main_home"]',
  'savings': 'input[name="savings"]',
  'income': 'input[name="your_income-other_income-per_interval_value"]',
  'outgoings': 'input[name="income_contribution"]'
};
