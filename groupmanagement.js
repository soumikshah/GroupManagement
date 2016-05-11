angular.module('taskmanager', [])
  .controller('TaskManController', function($scope) {

    //var $scope = this;
    $scope.options = ["Socket.io","Mongoose","Express"];
    $scope.groups = [
      {name:'Socket.io', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit', student:'Sou', done:false}
      ];

      $scope.stu = [{studentname: 'Soumik',name:"Socket.io"},
      {studentname:'Bhaumik',name:"Express"},
      {studentname: 'John',name:"Socket.io"},
      {studentname:'Kevin',name:"Express"}
    ];

    $scope.task = [{ tas : 'complete the homework',name:'Socket.io', done:false},
      {tas: 'Complete the presentation',name:'Express', done:false},
      {tas: 'Lorem ipsum dolor sit amet',name:'Socket.io', done:false},
      {tas: 'Lorem ipsum dolor sit amet',name:'Socket.io', done:false}
    ];
    //console.log($scope.task[0]);
    $scope.addGroup = function() {
      $scope.groups.push({name:$scope.todoModelName,description:$scope.todoModelDescription, done:false});
      $scope.todoModelName ={};
      //console.log($scope.todoModelName);
      $scope.options = $scope.todoModelName;
      console.log($scope.todoModelName +" -- "+  $scope.todoModelDescription);
    };

    $scope.addStudent = function(){
      $scope.stu.push({ studentname:$scope.Students, name:$scope.todoModelName ,  done:false});
      $scope.Students = {};
      console.log($scope.Students)
      //console.log($scope.gname);
    };

    $scope.addTask = function(){
      $scope.task.push({ tas: $scope.taskName,  done:false});
      $scope.taskName = {};
      //console.log($scope.gname);
    };
    $scope.completed = function() {
      var count = 0;
      angular.forEach($scope.task, function(todo) {
        count += todo.done ? 1 : 0;
      });
      return count;
    };

    $scope.remaining = function(){
      var count = 0;
      angular.forEach($scope.task, function(todo){
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.remove = function(item) {
      var index = $scope.groups.indexOf(item);
      $scope.groups.splice(index, 1);
      console.log(index);
    };

    $scope.removeStudent = function(item) {
      var index = $scope.stu.indexOf(item);
      $scope.stu.splice(index, 1);
      console.log(index);
    };

    $scope.removeTask = function(item) {
      var index = $scope.task.indexOf(item);
      $scope.task.splice(index, 1);
      console.log(index);
    };

    $scope.archive = function() {
      var oldTodos = $scope.groups;
      $scope.groups = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.groups.push(todo);
      });
    };
  });
