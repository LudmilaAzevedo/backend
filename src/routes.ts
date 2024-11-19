import { Request, Response, Router } from "express";
import { CarroController } from "./controller/CarroController";
import { ClienteController } from "./controller/ClienteController";
import { PedidoVendaController } from "./controller/PedidoVendaController";

// Cria um roteador
const router = Router();

// Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response) => {
    res.json({ mensagem: "Olá, mundo!" });
});

/* 
* ROTAS PARA CARROS
*/ 
// Rota para listar os carros
router.get("/lista/carros", CarroController.todos);
router.post("/novo/carro", CarroController.novo);
//Rota para remover um carro
router.delete("/delete/carro/:idCarro", CarroController.remover);
// Rota para atualizar um carro
router.put("/atualizar/carro/:idcarro", CarroController.atualizar);

/* 
* ROTAS PARA CLIENTES
*/ 
// Rotas CRUD Cliente
router.get("/lista/clientes", ClienteController.todos);
router.post("/novo/cliente", ClienteController.novo);
router.delete("/delete/cliente/:idCliente", ClienteController.remover);
router.put("/atualizar/cliente/:idcliente", ClienteController.atualizar);

/* 
* ROTAS PARA PEDIDOS
*/ 
// Rota para listar os pedidos
router.get("/lista/pedidos", PedidoVendaController.todos);
router.post("/novo/pedido", PedidoVendaController.novo);
router.delete("/delete/pedido/:idPedidoVenda", PedidoVendaController.remover);
router.put("/atualizar/pedido/:idpedidovenda", PedidoVendaController.atualizar);

// exportando as rotas
export { router };