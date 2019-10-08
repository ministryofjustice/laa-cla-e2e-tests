from behave import then, when


@then(u'I refresh the page')
@when(u'I refresh the page')
def step_refresh_page(context):
    context.driver.refresh()


def get_ga_ids_on_page(context):
    # Get all the GA ids(UA-xxx) on page
    return context.driver.execute_async_script("""
        var callback = arguments[0]; 
        ga(function(){
            items = [];
            ga.getAll().forEach(function(item){
                items.push(item.get("trackingId"));
            });
            callback(items);
        });
    """)
