class Validate
{
    constructor(info, validator)
    {
        this.invalid = [];
        this.info = info;
        this.validator = validator;
    }

    showValidateError(point) 
    {
        const step = document.createElement('div');
        const msg = document.createTextNode(`Please enter a valid ${point.toUpperCase()}`);
        step.appendChild(msg);
        step.className = "toast toast-danger show";
        document.body.appendChild(step);
        setTimeout(() => document.body.removeChild(step), 7000);
    }

    regex(point, choose)
    {
        var reg = this.data[point].toString().match(choose.pattern); 
        return reg;
    }

    
    valid() 
    {
        const val;
        var check = Object.hasOwnProperty.call(this.validations, point);
        for (val in this.validations)
         {
            if (check) 
            {
                 
                if (!this[this.validations[point].type](point, this.validations[point])) 
                {
                    this.invalid.push(point);
                    this.showValidateError(point);
                }
            }
        }
        var ret = this.invalid.length;
        ret === 0;  
        return ret;
    }

    

  
}