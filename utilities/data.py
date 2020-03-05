class record(dict):
	def __init__(self):
		# date information
		self['date']=[2020,1,20]
		self['report_id']=''
		self['report_num']=-1
		# region information
		self['location']=''
		self['country']=''
		self['WHO_region']=''
		# case
		self['tot_confirmed']=-1
		self['new_confirmed']=-1
		# death
		self['tot_death']=-1
		self['new_death']=-1
		# other
		self['transmission']=''
		self['last_reported']=-1
		self['suspected']=-1
		self['severe']=-1
class situation(dict):
	def __init__(self):
		# date information
		self['date']=[2020,1,20]
		self['report_id']=''
		self['report_num']=-1
		# global
		self['global_tot']=-1
		self['global_new']=-1
		self['global_tot_death']=-1
		self['global_new_death']=-1
		# china
		self['china_tot']=-1
		self['china_new']=-1
		self['china_tot_death']=-1
		self['china_new_death']=-1
		# other
		self['new_country']=-1
		self['other_tot']=-1
		self['other_new']=-1
		self['other_tot_death']=-1
		self['other_new_death']=-1
		# risk
		self['global_risk']=''
		self['china_risk']=''
		self['regional_risk']=''

x=record()
print(x)