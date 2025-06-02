"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Pedro' },
    { id: 3, nombre: 'Maria' }
];
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});
app.listen(port, () => {
    console.log(`Servidor escuchando`);
});
