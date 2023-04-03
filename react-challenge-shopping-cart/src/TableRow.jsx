import React from "react";

const TableRow = ({ data, deleteProduct, updateProduct }) => {
    return (
        <tr>
            <td>
                <div className="product">
                    <img src="https://picsum.photos/100/120" alt="" />
                    <div className="info">
                        <div className="name">Nome do produto</div>
                        <div className="category">Categoria</div>
                    </div>
                </div>
            </td>
            <td>
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(data.price)}
            </td>
            <td>
                <div className="qty">
                    <button>
                        <i
                            className="bx bx-minus"
                            onClick={() => updateProduct(data, "decrease")}
                        ></i>
                    </button>
                    <span>{data.quantity}</span>
                    <button>
                        <i
                            className="bx bx-plus"
                            onClick={() => updateProduct(data, "increase")}
                        ></i>
                    </button>
                </div>
            </td>
            <td>
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(data.price * data.quantity)}
            </td>
            <td>
                <button className="remove" onClick={() => deleteProduct(data)}>
                    <i className="bx bx-x"></i>
                </button>
            </td>
        </tr>
    );
};

export default TableRow;
