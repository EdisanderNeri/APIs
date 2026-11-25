async function load () {
    const REQUEST = await fetch ("")
    return await REQUEST.json ()
}
let dados = await load()
console.log (dados)