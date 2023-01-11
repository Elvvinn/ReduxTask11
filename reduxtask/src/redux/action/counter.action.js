
export const incrementAction = () => {


    return {

        type: "INCREMENT",

    }

}

export const decrementAction = () => {

    return {

        type: "DECREMENT",

    }

}

export const setIncrementValueAction = (value) => {

    return {

        type: "SET_INPUT",
        payload: value,

    }

}

export const incrementByUser = (value) => {

    return {

        type: "INPUT_BY_USER",
        payload: value,

    }
}

