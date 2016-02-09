app.controller("choresController", function ($scope) {
    $scope.test = "This is a test";

    $scope.chores = [{
        task:'Walk the Dog',
        dueDate: Date.now(),
        responsibleParty: 'Scott',
        estTime: 15
    },
    {
        task:'Take out the trash',
        dueDate: Date.now(),
        responsibleParty: 'Dave',
        estTime: 30
    },
    {
        task:'Do the Dishes',
        dueDate: Date.now(),
        responsibleParty: 'Randall',
        estTime: 50
    },
    {
        task:'Wash the Toliet',
        dueDate: Date.now(),
        responsibleParty: 'Chauncey',
        estTime: 16
    },
    {
        task:'Wash the windows',
        dueDate: Date.now(),
        responsibleParty: 'Mom',
        estTime: 99
    },
    {
        task:'Sweep the floor',
        dueDate: Date.now(),
        responsibleParty: 'Dad',
        estTime: 105
    },
    ]
    
    $scope.addNewChore = function() {
        $scope.chores.push($scope.newTask);
        $scope.newTask = "";
    }
    
    $scope.deleteChore = function(i) {
        $scope.chores.splice(i, 1)//start number, how many to splice
    }
})

var constr = function(){
    this.prop1 = prop1;
    this.prop2 = prop2;
}