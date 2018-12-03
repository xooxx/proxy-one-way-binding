import {Component} from "./lib";
import table  from "./components/table";

/* Init table component */
window.x = new Component(table, document.getElementsByTagName('main')[0], {
    rows: [
        {
            columns: [
                {
                    name: "MyMonolith UK",
                    size: "md-6",
                    headers: [
                        {name: "Store Name", width: "101px"},
                        {name: "Today Sales", width: "65px"}
                    ],
                    rows: [
                        {name: "Mix1", sum: "162,700 €"},
                        {name: "Mix2", sum: "1,200,000 €"},
                        {name: "Mix3", sum: "162,700 €"},
                        {name: "Mix4", sum: "1,200,000 €"}
                    ]
                },
                {
                    name: "MyMonolith UK",
                    size: "md-6",
                    headers: [
                        {name: "Store Name", width: "101px"},
                        {name: "Today Sales", width: "65px"}
                    ],
                    rows: [
                        {name: "Mix1", sum: "162,700 €"},
                        {name: "Mix2", sum: "1,200,000 €"},
                        {name: "Mix3", sum: "162,700 €"},
                        {name: "Mix4", sum: "1,200,000 €"}
                    ]
                }
            ]
        },
        {
            columns: [
                {
                    name: "MyMonolith UK",
                    size: "md-6",
                    headers: [
                        {name: "Store Name", width: "101px"},
                        {name: "Today Sales", width: "65px"}
                    ],
                    rows: [
                        {name: "Mix1", sum: "162,700 €"},
                        {name: "Mix2", sum: "1,200,000 €"},
                        {name: "Mix3", sum: "162,700 €"},
                        {name: "Mix4", sum: "1,200,000 €"}
                    ]
                },
                {
                    name: "MyMonolith UK",
                    size: "md-6",
                    headers: [
                        {name: "Store Name", width: "101px"},
                        {name: "Today Sales", width: "65px"}
                    ],
                    rows: [
                        {name: "Mix1", sum: "162,700 €"},
                        {name: "Mix2", sum: "1,200,000 €"},
                        {name: "Mix3", sum: "162,700 €"},
                        {name: "Mix4", sum: "1,200,000 €"}
                    ]
                }
            ]
        }
    ]
});