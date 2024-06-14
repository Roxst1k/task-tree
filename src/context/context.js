import {createContext} from 'react';


export const initialData = [
    {
        id: 1,
        name: 'root',
        expanded: false,
        children: [],
    }
];

const rename = (nodes, id, newName) => {
    return nodes.map(node => {
        if (node.id === id) {
            return {...node, name: newName};
        } else if (node.children && node.children.length > 0) {
            return {...node, children: rename(node.children, id, newName)};
        } else {
            return node;
        }
    });
};


const addNewChildren = (nodes, id, newCategory) => {
    return nodes.map(node => {
        if (node.id === id) {
            return {
                ...node,
                children: [...node.children, newCategory],
                expanded: true
            };
        } else if (node.children) {
            return {
                ...node,
                children: addNewChildren(node.children, id, newCategory)
            };
        }

        return node;
    });
};


const deleteChild = (nodes, id) => {
    return nodes.map(node => {
        if (node.children) {
            const updatedChildren = deleteChild(node.children, id);
            return {
                ...node,
                children: updatedChildren,
                expanded: updatedChildren.length > 0
            };
        }
        return node;
    }).filter(node => node.id !== id);
};


export const reducer = (state, action) => {
    switch (action.type) {
        case 'RENAME_TREE' :
            return rename(state, action.payload.id, action.payload.newName);
        case 'ADD_CHILDREN':
            return addNewChildren(state, action.payload.id, action.payload.newCategory);
        case 'DELETE_CHILD':
            return deleteChild(state, action.payload.id);
        default:
            return state;
    }
};

const MyContext = createContext({});


export default MyContext

