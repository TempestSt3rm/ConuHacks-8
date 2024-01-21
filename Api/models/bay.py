from datetime import datetime, timedelta


class Bay():
    counter = 0
    
    def __init__(self):
        self.id = Bay.get_next_id()
        self.name = "Bay " + str(self.id)
        self.schedule = []
    
    @classmethod
    def get_next_id(cls):
        cls.counter +=1
        return cls.counter

    def endPoint(self):
        if self.schedule == []:
            return 0
        else:
            return self.schedule[-1].outTime()
    
    def addEntry(self,entry):
        self.schedule.append(entry)
    
    def clear(self):
        self.schedule = []

class SpecialBay(Bay):
    def __init__(self,vehiculeType):
        super().__init__()
        self.restrictionType = vehiculeType

    

    
