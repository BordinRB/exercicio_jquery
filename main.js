$(document).ready(function(){
    $('#lista-de-tarefas').submit(function(e){
        e.preventDefault()
        const tarefa = $('#nova-tarefa').val()
        if (tarefa){
            $('#lista-de-tarefas').append('<li>' + tarefa + '</li>')
            $('#nova-tarefa').val('')
        }
    })
    $('#lista-de-tarefas').on('click', 'li', function(){
        $(this).toggleClass('completed')
    })
})