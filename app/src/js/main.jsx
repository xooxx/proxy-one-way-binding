import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementsByTagName('main')[0]);

/*
 rows: [
            {
                columns: [
                    {
                        name: "MyMonolith UK",
                        rid: "asd",
                        size: "md-6",
                        headers: [
                            {name: "Store Name", width: "101px"},
                            {name: "Today Sales", width: "65px"}
                        ],
                        rows: [
                            {id= "1", name: "Mix1", sum: "162,700 €"},
                            {id= "2",name: "Mix2", sum: "1,200,000 €"},
                            {id= "3",name: "Mix3", sum: "162,700 €"},
                            {id= "4",name: "Mix4", sum: "1,200,000 €"}
                        ]
                    }
                ]
            }
 */

/*
window.x = new Component(table, document.getElementsByTagName('main')[0], {
    rows: [
        {
            columns: [
                {
                    name: "MyMonolith UK",
                    size: "md-6",
                    rid: "as1",
                    headers: [
                        {name: "Store Name", width: "101px"},
                        {name: "Today Sales", width: "65px"}
                    ],
                    rows: [
                        {id: "1",name: "Mix1", sum: "162,700 €"},
                        {id: "2",name: "Mix2", sum: "1,200,000 €"},
                        {id: "3",name: "Mix3", sum: "162,700 €"},
                        {id: "4",name: "Mix4", sum: "1,200,000 €"}
                    ]
                },
                {
                    name: "MyMonolith UK",
                    size: "md-6",
                    rid: "as2",
                    headers: [
                        {name: "Store Name", width: "101px"},
                        {name: "Today Sales", width: "65px"}
                    ],
                    rows: [
                        {id: "1",name: "Mix1", sum: "162,700 €"},
                        {id: "2",name: "Mix2", sum: "1,200,000 €"},
                        {id: "3",name: "Mix3", sum: "162,700 €"},
                        {id: "4",name: "Mix4", sum: "1,200,000 €"}
                    ]
                }
            ]
        },
        {
            columns: [
                {
                    name: "MyMonolith UK",
                    size: "md-6",
                    rid: "as3",
                    headers: [
                        {name: "Store Name", width: "101px"},
                        {name: "Today Sales", width: "65px"}
                    ],
                    rows: [
                        {id: "1",name: "Mix1", sum: "162,700 €"},
                        {id: "2",name: "Mix2", sum: "1,200,000 €"},
                        {id: "3",name: "Mix3", sum: "162,700 €"},
                        {id: "4",name: "Mix4", sum: "1,200,000 €"}
                    ]
                },
                {
                    name: "MyMonolith UK",
                    size: "md-6",
                    rid: "as4",
                    headers: [
                        {name: "Store Name", width: "101px"},
                        {name: "Today Sales", width: "65px"}
                    ],
                    rows: [
                        {id: "1",name: "Mix1", sum: "162,700 €"},
                        {id: "2",name: "Mix2", sum: "1,200,000 €"},
                        {id: "3",name: "Mix3", sum: "162,700 €"},
                        {id: "4",name: "Mix4", sum: "1,200,000 €"}
                    ]
                }
            ]
        }
    ]
});*/