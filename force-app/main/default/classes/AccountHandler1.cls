global class AccountHandler1 extends AbstaractTriggerContext {
	global override void beforeInsert(List<sobject> newList,List<sobject> oldList,Map<Id,sobject> newMap,Map<Id,sobject> oldMap){
        system.debug('executing1');
    }
}