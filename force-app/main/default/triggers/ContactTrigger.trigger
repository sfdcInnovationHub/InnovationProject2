/**
 * @author			: g.navneet@samsung.com
 * @group			: SFDC Innovation Hub
 * @last modified on: 
 * @last modified by:
 * Ver	Date		Author					Modification
 * 1.0	2023-10-06	g.navneet@samsung.com	Initial Version
 * 
 */

 trigger ContactTrigger on Contact (before delete) {
	(new ContactTriggerHandler()).run();
}
