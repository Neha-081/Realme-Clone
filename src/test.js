const prod=(x)=>{
    x=x+5
    return inner=>(
        x*inner
    )
}
prod(5)(10)