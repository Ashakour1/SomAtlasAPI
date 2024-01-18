# SomRegionsAPI

## introduction

SomRegionsAPI: Streamlining App Development with Key Somali Regional Data. This API is crafted to make life easier for developers, especially when building applications that require user registration based on states and districts in Somalia. By providing seamless access to accurate and up-to-date geographic information, SomRegionsAPI reduces complexity and enhances the efficiency of the development process, enabling a smoother and more user-friendly registration experience in your applications.

## Getting Started

To embark on this journey of simplicity and efficiency, refer to the [Getting Started](#getting-started) section below. It provides essential information, prerequisites, and usage guidelines to get you started on integrating SomRegionsAPI seamlessly into your projects.

## Table of Contents

1. [Introduction](#introduction)
2. [Key Benefits](#key-benefits)
3. [Getting Started](#getting-started)
4. [Usage](#usage)
5. [Endpoints](#endpoints)
6. [Author](#author)

## Key Benefits

🌍 **Comprehensive Access States and Districts**: SomAtlasAPI provides easy access to a comprehensive all states and districts in Somalia. No more struggling to gather accurate and up-to-states and districts – it's all at your fingertips.

🚀 **Simplified Registration**: When you need to register a person's place of birth or residence, SomAtlasAPI makes it a breeze. Seamlessly integrate the API into your registration process, and let users select their state and district effortlessly.

📲 **User-Friendly Integration**: With SomAtlasAPI, the integration process is designed to be user-friendly for developers. You won't need to navigate complex systems; the API is crafted to be intuitive, making your development journey smoother.

⚡ **Real-Time Updates**: Stay ahead with real-time updates. SomAtlasAPI ensures that your app always has the latest geographic information, keeping your user data accurate and reliable.

🛠️ **Efficiency at its Core**: The primary goal of SomAtlasAPI is to enhance the efficiency of your development process. By simplifying registration and providing easy access to essential states and districts, you can optimize your app's functionality and deliver a hassle-free experience to your users.

## usage

1. `api/states`

```js
{
    fetch('https://www.api.somatlas.dev/api/v1/states')
    .then((res) => res.json())
    .then((data) => console.log(data))
}
```

**👇output**

```json
{
  "results": {
    "data": {
      "states": [
        {
        "id": 1,
        "name": "Banaadir",
        "area": "1222 122 km",
        "city ": "mogadisho",
        "district": ["Hilawaa", "Yaaqsheed", "Waabari"]
      }
        {
        "id": 2,
        "name": "Awdal",
        "type"  : "region",
        "city ": "Baki ",
        "district": ["baki ", "boorame  ", "lug hayo" , "zaylac"]
      }
      ]
    }
    "total" : 18
  }
}
```

1. `api/states/state/:id`

```js
{
    fetch(' https://www.api.somatlas.dev/api/v1/states/1')
    .then((res) => res.json())
    .then((data) => console.log(data))
}
```

**👇output**

```json
{
  "results": {
    "data": {
      "state": [
        {
        "id": 1,
        "name": "Banaadir",
        "type": "Region",
        "city ": "mogadisho",
        "district": ["Hilawaa", "Yaaqsheed", "Waabari"]
      }
      ]
    }
    "total" : 2
  }
}
```

## Endpoints

1.`api/states/` get all somali states and districts

2. `api/states/state/:id` get one somali state and district

## Author

- Github [Github](https://github.com/Ashakour1)
- X [Twitter](https://twitter.com/somatlasdev)
- LinkedIn [LinkedIn](https://www.linkedin.com/in/a-shakour-mohammed-90836725a/)
- Email[Email](engshakrayare114@gmail.com)
