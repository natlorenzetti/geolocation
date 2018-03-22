({
    doInit : function(component, event) {
        var action = component.get("c.findAll");
        action.setCallback(this, function(a) {
            component.set("v.accounts", a.getReturnValue());
            var event2 = $A.get("e.c:AccountsLoaded");
            event2.setParams({"accounts": a.getReturnValue()});
            event2.fire();
        });
    $A.enqueueAction(action);
    }
})