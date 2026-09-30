function Checkout({cart,total,confirmar,cerrar}) {


return (

<div className="modal d-block"
style={{
background:"rgba(0,0,0,0.7)"
}}>


<div className="modal-dialog">


<div className="modal-content p-4">


<h2>
Finalizar compra 🛒
</h2>


<input
className="form-control mb-2"
placeholder="Nombre"
/>


<input
className="form-control mb-2"
placeholder="Correo"
/>


<input
className="form-control mb-3"
placeholder="Dirección"
/>



<h4>
Total: ${total}
</h4>



<button

className="btn btn-success"

onClick={confirmar}

>

Confirmar compra

</button>



<button

className="btn btn-secondary ms-2"

onClick={cerrar}

>

Cancelar

</button>


</div>


</div>


</div>


)


}


export default Checkout;