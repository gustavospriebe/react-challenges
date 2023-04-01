/*
? DESAFIO - Shopping Cart:

Você deve desenvolver um carrinho de compras funcional.
Funcionalidades que esperamos que você desenvolva:

todo - inserção de novos produtos no carrinho
todo - remoção de produtos já inseridos
todo - alteração de quantidade de cada item 
todo - cálculo do preço total dos itens inseridos

todo - FUNCIONALIDADE EXTRA: aplicação de cupom de desconto
*/
import "./styles.scss";

import { PageHeader } from "./layout/PageHeader";
import { PageTitle } from "./layout/PageTitle";
import Summary from "./Summary";
import TableRow from "./TableRow";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { api } from "./provider";

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function App() {
    const [cart, setCart] = useState([]);

    const product = {
        id: uuidv4(),
        name: "produto",
        category: "categoria",
        price: randomNumber(100, 2000),
        quantity: 1,
    };

    async function fetchData() {
        const req = await api.get("/cart");

        console.log(req.data);

        setCart(req.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    function newProduct() {
        api.post("/cart", product).then((response) => {
            console.log(response);
            fetchData();
        });
    }

    function deleteProduct(item) {
        api.delete(`/cart/${item._id}`).then((response) => {
            console.log(response);
            fetchData();
        });
    }

    function updateProduct(item, action) {
        const newQuantity = item.quantity;

        if (action === "decrease") {
            if (newQuantity === 1) {
                return;
            }
            newQuantity -= 1;
        }

        if (action === "increase") {
            newQuantity += 1;
        }

        const updatedCart = { ...item, quantity: newQuantity };

        api.put(`/cart/${item._id}`, updatedCart).then((response) => {
            console.log(response);
            fetchData();
        });
    }

    return (
        <>
            <PageHeader />
            <main>
                <PageTitle data={"Seu carrinho"} />
                <button className="new-item" onClick={newProduct}>
                    Novo item
                </button>
                <div className="content">
                    <section>
                        <table>
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Preço</th>
                                    <th>Quantidade</th>
                                    <th>Total</th>
                                    <th>-</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <TableRow
                                        key={item?.id}
                                        data={item}
                                        deleteProduct={deleteProduct}
                                        updateProduct={updateProduct}
                                    />
                                ))}
                                {cart.length === 0 && (
                                    <tr>
                                        <td colSpan="5">
                                            Carrinho vazio, aperte o botão acima
                                            para adicionar.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </section>
                    <aside>
                        <Summary />
                    </aside>
                </div>
            </main>
        </>
    );
}

export default App;
