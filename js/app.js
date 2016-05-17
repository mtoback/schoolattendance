
var model = {
    students : ['Slappy The Frog',
    'Lilly the Lizard',
    'Paulrus the Walrus',
    'Gregory the Goat',
    'Adam the Anaconda',
    ],
    days: 12,
    /** attendance is a matrix of students vs days,
        make it a double array so it's flexible!
    **/
    attendance: [],

    getDays : function(){
        return model.days;
    },

    getStudents : function(){
        return model.students;
    },

    init: function(){
        model.attendance = new Array(model.students.length);
        for (var i = 0; i < model.students.length; i++) {
            model.attendance[i] = new Array(model.days);
        }
    }
}

var view = {
    init: function(){
        var head = document.createElement("th");
        head.class = "name-col";
        head.innerHTML  = "Student Name";
        $("#header").append(head);
        var days = controller.getDays();
        for(var i=0; i < days; i++){
            $("#header").append('<th>' + i + '</th>');
        }
        $("#header").append('<th class="missed-col">Days Missed-col</th>');
        var students = controller.getStudents();
        var numStudents = students.length;
        for(var i=0; i<numStudents;i++){
            this.$row = $('<tr></tr>');
            this.$row.addClass("student");
            this.$row.append('<td class="name-col">' + students[i] + '</td>');
            for (var j=0; j < days; j++){
                this.$row.append('<td class="attend-col"><input class="checkbox" type="checkbox"></td>');
            }
            this.$row.append('<td class="missed-col">0</td>');
            $('tbody').append(this.$row);
        }
        $("tbody").on("click","tr td input.checkbox", function(){
            var parentTr = $(this).parent().parent().get(0);
            var lastTr = $(parentTr).children().last();
            var currentVal = parseInt($(lastTr).text());
            if ($(this).prop("checked")){
                $(lastTr).text(currentVal + 1);
            } else {
                $(lastTr).text(currentVal - 1);
            }
            })
    },
}

var controller = {
    init : function(){
        model.init();
        view.init();
    },
    getDays: function(){
        return model.getDays();
    },

    getStudents: function(){
        return model.getStudents();
    }
}

controller.init();
