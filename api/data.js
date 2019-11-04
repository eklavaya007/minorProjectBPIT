const products = [
  {
    id: 01,
    name: 'Maytex 5050 Ultra Safety Latex Exam Gloves for High Risk Environments',
    available_quantity: 50,
    price: 1000,
    ex: 'nope',
    description: 'Latex gloves are natural material, made out of rubber. They are a popular choice of protective glove for medical or industrial use',
    type: 'Gloves', //can be syringe/gloves/anything,
    imgURL: "./images/LatexGloves.jpg"  //'LatexGloves'
  },
  {
    id: 02,
    name: 'Maytex 5450 Synthetic Vinyl Exam Gloves, Powder Free',
    available_quantity: 25,
    price: 450,
    ex: 'nope',
    description: 'Powder-free gloves undergo a process known as chlorination that helps make latex gloves less form fitting so that powder is not needed for easy donning and removal.',
    type: 'Gloves', //can be syringe/gloves/anything,
    imgURL: './images/powderfreeGloves.jpg'
  },
  {
    id: 03,
    name: 'Dynarex Sterile Nitrile Exam Gloves',
    available_quantity: 5,
    price: 900,
    ex: 'nope',
    description: 'Sterile gloves are gloves that are free from all microorganisms. ... Sterile gloves help prevent surgical site infections and reduce the risk of exposure to blood and body fluid pathogens for the health care worker.',
    type: 'Gloves', //can be syringe/gloves/anything,
    imgURL: './images/SterileGloves.jpg'
  },
  {
    id: 04,
    name: 'Nitrile Exam Gloves',
    available_quantity: 5,
    price: 450,
    ex: 'nope',
    description: 'Nitrile gloves are made out of a synthetic rubber, and are an ideal alternative when latex allergies are of concern',
    imgURL: './images/NitrileGloves.jpg'
  },
 
  {
    id: 05,
    name: 'Nipro 1cc Tuberculin Syringes',
    available_quantity: 5,
    price: 450,
    ex: 'nope',
    description: 'Tuberculin Syringes are small syringes with fine needles that hold up to one half to one cubic centimeter of fluid, used to administer medication (antigen) under the skin and perform a tuberculosis test called PPD',
    type: 'injection', //can be syringe/gloves/anything,
    imgURL: './images/Nitrile1cc.jpg'
  },

  {
    id: 06,
    name: 'Nipro 3cc Hypodermic Syringes',
    available_quantity: 7,
    price: 50,
    ex: 'nope',
    description: 'Hypodermic syringes (hypodermic means beneath the skin) consist of a hollow needle attached to a syringe. They pierce the skin and inject substances into the bloodstream. They are also used to extract liquid such as blood from the body',
    type: 'injection', //can be syringe/gloves/anything,
    imgURL: './images/nitrile3cc.jpg'
  },
  
  {
    id: 07,
    name: 'Nipro 5cc Hypodermic Syringes',
    available_quantity: 7,
    price: 50,
    ex: 'nope',
    description: 'Hypodermic syringes (hypodermic means beneath the skin) consist of a hollow needle attached to a syringe. They pierce the skin and inject substances into the bloodstream. They are also used to extract liquid such as blood from the body',
    type: 'injection', //can be syringe/gloves/anything,
    imgURL: './images/Nitrile5cc.jpg'

  },
  {
    id: 08,
    name: 'Nipro 10cc Hypodermic Syringes',
    available_quantity: 7,
    price: 50,
    ex: 'nope',
    description: 'Hypodermic syringes (hypodermic means beneath the skin) consist of a hollow needle attached to a syringe. They pierce the skin and inject substances into the bloodstream. They are also used to extract liquid such as blood from the body',
    type: 'injection', //can be syringe/gloves/anything,
    imgURL: './images/nitrile10cc.jpg'
  },
  {
    id: 09,
    name: 'Dynarex SecureSafe™ Safety Insulin Syringes',
    available_quantity: 7,
    price: 50,
    ex: 'nope',
    description: 'Insulin syringes are made specifically for self injections and have friendly features: shorter needles, as insulin injections are subcutaneous (under the skin) rather than intramuscular, finer gauge needles, for less pain, and. markings in insulin units to simplify drawing a measured dose of insulin',
    type: 'injection', //can be syringe/gloves/anything,
    imgURL: './images/insulinsyringe.jpg'
  },
  {
    id: 10,
    name: 'Riester Duplex 2.0 Stainless Steel Dual Head Stethoscopes',
    available_quantity: 7,
    price: 50,
    ex: 'nope',
    description: 'Superior sound transmission is achiever through the premium-quality stainless-steel chest piece',
    type: 'stethoscope', //can be syringe/gloves/anything,
    imgURL: './images/stainless.jpg'
  },

  {
    id: 11,
    name: 'Cardiology Stethoscope',
    available_quantity: 10,
    price: 500,
    ex: 'nope',
    description: 'Cardiology Stethoscopes provide outstanding acoustic sensitivity to help you perform detailed diagnostic auscultation',
    type: 'stethoscope', //can be syringe/gloves/anything,
    imgURL: './images/cardiology.jpg'
  },
  {
    id: 12,
    name: 'Convertible Clinician Stethoscope',
    available_quantity: 10,
    price: 500,
    ex: 'nope',
    description: 'Convertible Adscope stethoscope; extra large bell; AFD technology; flexible tubing; lightweight',
    type: 'stethoscope', //can be syringe/gloves/anything,
    imgURL: './images/convertible.jpg'
  },
  {
    id: 13,
    name: 'Baseline Dual Head Stethoscopes',
    available_quantity: 10,
    price: 500,
    ex: 'nope',
    description: 'Reliable performance for heart, lung and blood pressure assessment.Tuneable diaphragm responds with a simple pressure change to capture low and high-frequency sounds',
    type: 'stethoscope', //can be syringe/gloves/anything,
    imgURL: './images/dualhead.jpg'
  },

  {
    id: 14,
    name: 'IMCO 660-IMC Nurses Stethoscope',
    available_quantity: 10,
    price: 500,
    ex: 'nope',
    description: 'Diaphragm only chestpiece,Lightweight aluminum chestpiece construction,Non-chill diaphragm only nurse style chestpiece',
    type: 'stethoscope', //can be syringe/gloves/anything,
    imgURL: './images/nurses.jpg'

  },
  {
    id: 15,
    name: 'Omron BP785 Series 10 Automatic Blood Pressure Monitor',
    available_quantity: 10,
    price: 500,
    ex: 'nope',
    description: 'All Omron blood pressure monitors are clinically proven accurate',
    type: 'bloodpressure', //can be syringe/gloves/anything,
    imgURL: './images/omron.jpg'
  },

  {
    id: 16,
    name: 'Pedia Pals Benjamin Bear Pediatric Blood Pressure Monitor',
    available_quantity: 4,
    price: 1500,
    ex: 'nope',
    description: 'A Blood Pressure monitor used for infants',
    type: 'bloodpressure', //can be syringe/gloves/anything,
    imgURL: './images/infant.jpg'
  },
  {
    id: 17,
    name: 'ADC Advantage™ Ultra 6016N Wrist Blood Pressure Monitor',
    available_quantity: 5,
    price: 450,
    ex: 'nope',
    description: 'Wrist blood pressure monitors are extremely sensitive to body position. ... Even then, blood pressure measurements taken at the wrist are usually higher and less accurate than those taken at your upper arm.',
    type: 'bloodpressure', //can be syringe/gloves/anything,
    imgURL: './images/wrist.jpg'


  },

  {
    id: 18,
    name: 'Prodigy Voice® Talking Blood Glucose Monitor',
    available_quantity: 7,
    price: 50,
    ex: 'nope',
    description: 'A blood glucose monitor is a device that allows you to measure the glucose levels within your blood.',
    type: 'meter', //can be syringe/gloves/anything,
    imgURL: './images/sugar1.jpg'
  },

  {
    id: 19,
    name: 'Prodigy Pocket® Blood Glucose Monitor',
    available_quantity: 10,
    price: 500,
    ex: 'nope',
    description: 'A blood glucose monitor is a device that allows you to measure the glucose levels within your blood.',
    type: 'meter', //can be syringe/gloves/anything,
    imgURL: './images/sugar.jpg'
  }
];



const users = [
    {
      'name': 'user',
      'password': 'qwerty'
    },
    {
      'name': 'example',
      'password': 'qwerty'
    }
];

module.exports = { 'products': products, users: users }