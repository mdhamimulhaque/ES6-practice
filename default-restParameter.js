// ============= default parameter ================

const defaultParameter = (x = "this is default value") => {
    console.log(`${x}`)
}

defaultParameter() //-----i send anything that's why set default
defaultParameter("Hii....this is not default.i send it.")

// ============= rest parameter ================

const restParameter = (x,y,...z) =>{
   console.log(`x = ${x}, y = ${y}, z = ${z}`)
}

restParameter(10,20,30,40,50)