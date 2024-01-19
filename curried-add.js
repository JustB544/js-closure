function curriedAdd(total) {
    if (total === undefined){
        return 0;
    }
    let add = total;
    const func = (num) => {
        if (num === undefined){
            return add;
        }
        add += num;
        return func;
    };
    return func;
}

module.exports = { curriedAdd };
