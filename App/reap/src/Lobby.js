import React from 'react';

export default class Lobby extends React.Component {
    render (){
        return (
            <div>
                <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        <span class="glyphicon glyphicon-education"></span>
                        UNIVALI
                    </a>
                    </div>
                    <button type="button" class="btn btn-default navbar-btn pull-right">Sair</button>
                </div>
                </nav>
                
                <div class="container main-container">
                    <div class="row">
                        <div class="col-xs-9">
                            <div class="row title-row centered-row">
                                <div class="col-xs-10">
                                    <h2 class="main-title">Exercícios disponíveis</h2>
                                </div>
                                <div class="col-xs-2 filters" data-toggle="collapse" data-target="#filter-panel">
                                    Filtros <span class="glyphicon glyphicon-triangle-bottom"></span>
                                </div>
                            </div>
                            
                            <div class="panel collapse" id="filter-panel">
                                <div class="panel-body">
                                    <form class="form-inline">
                                        <div class="form-group">
                                            <label class="control-label">Categoria</label>
                                            <select class="form-control">
                                                <option selected>Todas</option>
                                                <option>Básico</option>
                                                <option>Sequências</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Status</label>
                                            <select class="form-control">
                                                <option selected>Todos</option>
                                                <option>Finalizado</option>
                                                <option>Em andamento</option>
                                                <option>Disponível</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                            <table class="table table-bordered table-hover table-striped exercise-table">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Dificuldade</th>
                                        <th>Pontos</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Olá, mundo!</td>
                                        <td>
                                            <span class="glyphicon glyphicon-star"></span>
                                        </td>
                                        <td>5</td>
                                        <td class="text-center"><span title="Finalizado" class="glyphicon glyphicon-ok"></span></td>
                                    </tr>
                                    <tr>
                                        <td>Preenchimento de Vetor</td>
                                        <td>
                                            <span class="glyphicon glyphicon-star"></span>
                                            <span class="glyphicon glyphicon-star"></span>
                                        </td>
                                        <td>20</td>
                                        <td class="text-center"><span title="Em andamento" class="glyphicon glyphicon-hourglass"></span></td>
                                    </tr>
                                    <tr>
                                        <td>Sequência de Fibonacci</td>
                                        <td>
                                            <span class="glyphicon glyphicon-star"></span>
                                            <span class="glyphicon glyphicon-star"></span>
                                            <span class="glyphicon glyphicon-star"></span>
                                        </td>
                                        <td>45</td>
                                        <td class="text-center"><span title="Disponível" class="glyphicon glyphicon-exclamation-sign"></span></td>
                                    </tr>
                                    <tr>
                                        <td>Números Perfeitos</td>
                                        <td>
                                            <span class="glyphicon glyphicon-star"></span>
                                            <span class="glyphicon glyphicon-star"></span>
                                            <span class="glyphicon glyphicon-star"></span>
                                            <span class="glyphicon glyphicon-star"></span>
                                        </td>
                                        <td>60</td>
                                        <td class="text-center"><span title="Disponível" class="glyphicon glyphicon-exclamation-sign"></span></td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            
                        </div>
                        <div class="col-xs-3">
                            <div class="input-group member-search">
                                <div class="input-group-addon">
                                    <span class="glyphicon glyphicon-search"></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Buscar membro"/>
                            </div>
                            
                            <div class="panel panel-default member-list">
                                <div class="panel-body">
                                    <h4>Professores</h4>
                                    <ul class="list-group">
                                        <a href="#" class="list-group-item"><span class="badge online">&nbsp;</span>Charles Dexter</a>
                                        <a href="#" class="list-group-item"><span class="badge">&nbsp;</span>Kezian Mason</a>
                                    </ul>
                                    <h4>Alunos</h4>
                                    <ul class="list-group">
                                        <a href="#" class="list-group-item"><span class="badge online">&nbsp;</span>Antônio</a>
                                        <a href="#" class="list-group-item"><span class="badge online">&nbsp;</span>José</a>
                                        <a href="#" class="list-group-item"><span class="badge online">&nbsp;</span>Reinaldo</a>
                                        <a href="#" class="list-group-item"><span class="badge online">&nbsp;</span>Walter</a>
                                        <a href="#" class="list-group-item"><span class="badge">&nbsp;</span>Bruno</a>
                                        <a href="#" class="list-group-item"><span class="badge">&nbsp;</span>Carlos</a>
                                        <a href="#" class="list-group-item"><span class="badge">&nbsp;</span>Manoel</a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                <script src="js/bootstrap.min.js"></script>
            </div>
        );
    }
};