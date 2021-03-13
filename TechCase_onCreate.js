//Gloval Variables
var originalStatus
var formContext
var statusChanged = false
var originalResolveText

function onLoad(context) {


    initVariables(context);
    
    registerEvents();
}


function onSave(context)
{
    formContext = context.getFormContext();
    originalStatus = formContext.getAttribute("pw_status").getValue();
    originalResolveText = formContext.getAttribute('pw_resolve').getValue()
}

function initVariables(context)
{
    formContext = context.getFormContext();
    originalStatus = formContext.getAttribute("pw_status").getValue();
    originalResolveText = formContext.getAttribute('pw_resolve').getValue()
    formContext.data.entity.addOnSave(onSave);
}

function registerEvents()
{
    formContext.getAttribute("pw_status").addOnChange(newStatus)
    formContext.getAttribute('pw_resolve').addOnChange(newResolve);
}

function newResolve()
{
    var newResolveText = formContext.getAttribute('pw_resolve').getValue();
    if(newResolveText == originalResolveText)
    {
        var notification = {
            messages: ["Please enter a Diffrent Resolve Text"],
            notificationLevel: "ERROR",
            uniqueId: "1"
        }

       formContext.getControl('pw_resolve').addNotification(notification);

    }else
    {
        formContext.getControl('pw_resolve').clearNotification("1");
    }
}

function newStatus()
{
    var newStatusValues = formContext.getAttribute("pw_status").getValue();
    if(newStatusValues != originalStatus)
    {
        statusChanged = true;

        var notification = {
            messages: ["Please enter a new Resolve Text"],
            notificationLevel: "ERROR",
            uniqueId: "1"
        }

       formContext.getControl('pw_resolve').addNotification(notification);

    }else{
        statusChanged = false;
        formContext.getControl('pw_resolve').clearNotification("1");
    }

    //alert(statusChanged)
}