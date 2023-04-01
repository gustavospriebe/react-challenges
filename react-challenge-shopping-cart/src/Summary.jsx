import React from "react";

const Summary = ({ cart }) => {
    return (
        <>
            <div className="box">
                <header>Resumo da compra</header>
                <div className="info">
                    <div>
                        <span>Sub-total</span>
                        <span>
                            {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(
                                cart.reduce(
                                    (acc, item) =>
                                        acc + item.price * item.quantity,
                                    0
                                )
                            )}
                        </span>
                    </div>
                    <div>
                        <span>Frete</span>
                        <span>Gratuito</span>
                    </div>
                    <div>
                        <button>
                            Adicionar cupom de desconto
                            <i className="bx bx-right-arrow-alt"></i>
                        </button>
                    </div>
                </div>
                <footer>
                    <span>Total</span>
                    <span>
                        {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        }).format(
                            cart.reduce(
                                (acc, item) => acc + item.price * item.quantity,
                                0
                            )
                        )}
                    </span>
                </footer>
            </div>
            <button>Finalizar Compra</button>
        </>
    );
};

export default Summary;
