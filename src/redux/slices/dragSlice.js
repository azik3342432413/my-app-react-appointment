import { createSlice } from '@reduxjs/toolkit'
import {generateUniqueId} from "../../data/helper";
import smiles from "../../data/smiles";

export const dragSlice = createSlice({
    name: 'drag',
    initialState: {
        value: 0,
        item: {},
        blocks: [],
        selected: {}
    },
    reducers: {
        increment: (state, action) => {
            state.value += 1;
            state.item = action.payload;

            const blockSmiles = smiles.map(obj => {
                const newObj = { ...obj }; // Create a shallow copy of the original object
                delete newObj.image; // Remove the "img" key from the new object
                return newObj;
            });
            state.item = {...state.item,
                id: generateUniqueId(),
                smiles: blockSmiles,
                activeBlocks: blockSmiles,
                columns: 5,
                showLabels: true,
                position: 'justify-center',
                color: '#60a5fa',
                border: 'border-l-8'
            };

        },
        addElement: (state, action) => {
            state.blocks.push(action.payload);
        },
        updateElement: (state, action) => {
            const foundObject = state.blocks.find(obj => obj.id === action.payload.id);
            foundObject.active = true;
            state.selected = foundObject;
            state.blocks = state.blocks.map(obj => obj.id === action.payload.id ? foundObject : { ...obj, active: false })
        },
        changeSmileColumns: (state, action) => {
            let foundObject = state.blocks.find(obj => obj.id === action.payload.id);
            foundObject.columns = action.payload.columns;
            state.selected = foundObject;

            if(action.payload.columns === 2) {
                foundObject.activeBlocks = foundObject.smiles.filter((item, key) => key !== 1 && key !==2 && key !== 3);
            } else if(action.payload.columns === 3) {
                foundObject.activeBlocks = foundObject.smiles.filter((item, key) => key !== 1 && key !== 3);
            } else if(action.payload.columns === 4) {
                foundObject.activeBlocks = foundObject.smiles.filter((item, key) => key !== 2);
            } else {
                foundObject.activeBlocks = foundObject.smiles;
            }
            state.blocks = state.blocks.map(obj => obj.id === action.payload.id ? foundObject : obj);

            // console.log(state.blocks);
        },

        showLabels: (state, action) => {
            const foundObject = state.blocks.find(obj => obj.id === action.payload.id);
            foundObject.showLabels = !foundObject.showLabels;
            state.selected = foundObject;
            state.blocks = state.blocks.map(obj => obj.id === action.payload.id ? foundObject : obj)
        },

        updateLabels: (state, action) => {

            state.blocks = state.blocks.map(item => {
                if (item.id === action.payload.id) {
                    item.activeBlocks = item.activeBlocks.map(smile => {
                        if (smile.id === action.payload.smile) {
                            smile.name = action.payload.text;
                        }
                        return smile;
                    });
                }
                return item;
            });

            const foundObject = state.blocks.find(obj => obj.id === action.payload.id);
            state.selected = foundObject;
        },

        updatePosition: (state, action) => {

            state.blocks = state.blocks.map(item => {
                if (item.id === action.payload.id) {
                    item.position = action.payload.position;
                }
                return item;
            });

            const foundObject = state.blocks.find(obj => obj.id === action.payload.id);
            state.selected = foundObject;
        },

        updateColor: (state, action) => {

            state.blocks = state.blocks.map(item => {
                if (item.id === action.payload.id) {
                    item.color = action.payload.color;
                }
                return item;
            });

            const foundObject = state.blocks.find(obj => obj.id === action.payload.id);
            state.selected = foundObject;
        },

        updateBorder: (state, action) => {

            state.blocks = state.blocks.map(item => {
                if (item.id === action.payload.id) {
                    item.border = action.payload.position;
                }
                return item;
            });

            const foundObject = state.blocks.find(obj => obj.id === action.payload.id);
            state.selected = foundObject;
        },

        decrement: (state) => {
            state.value -= 1
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment,updateColor, updateBorder, updatePosition,addElement, updateLabels,updateElement,changeSmileColumns,showLabels } = dragSlice.actions

export default dragSlice.reducer