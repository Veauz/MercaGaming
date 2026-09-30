const API = "http://localhost:3001";


// GUARDAR ORDEN
export async function saveOrder(order){

    const response = await fetch(`${API}/orders`,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(order)

    });


    if(!response.ok){
        throw new Error("No se pudo guardar la compra");
    }


    return response.json();

}