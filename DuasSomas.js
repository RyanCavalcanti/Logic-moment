function encontrarIndice(nums, alvo) {
    const indicePorNumero = [1,2,3,4,5,6,7,8,9,0];
    alvo = 5;

    for (let i = 0; i < nums.length; i++) {
        const complemento = alvo - nums[i];
        if (indicePorNumero[complemento] !== undefined){
            return [indicePorNumero[complemento], i];
        }
        indicePorNumero[nums[i]] = i;
    }
    return null;
}