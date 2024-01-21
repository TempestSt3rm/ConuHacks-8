from datetime import datetime, timedelta


class Bay():
    counter = 0
    
    def __init__(self, vehicleType):
        self.id = Bay.get_next_id()
        self.name = "Bay " + str(self.id)
        self.vehicle_type = vehicleType
    
    @classmethod
    def get_next_id(cls):
        cls.counter +=1
        return cls.counter
    
    def equals(self, other):
        if self.id == other.id:
            return True
        else:
            return False

class SpecialBay(Bay):
    def __init__(self,vehiculeType):
        super().__init__()
        self.restrictionType = vehiculeType

    

    
