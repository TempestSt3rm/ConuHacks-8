from bay import *
from entry import *
from datetime import datetime, timedelta

bay1 = Bay()
bay2 = Bay()
bay3 = Bay()
bay4 = Bay()
bay5 = Bay()
bay6Compact = SpecialBay('compact')
bay7Medium = SpecialBay('medium')
bay8Full = SpecialBay("full-size")
bay9Class1Truck = SpecialBay("class 1 truck")
bay10Class2Truck = SpecialBay("class 2 truck")

class scheduler():
    def __init__(self,entryForDay,day,month):
        self.entryForDay = entryForDay
        self.bays = [bay1,bay2,bay3,bay4,bay5]
        self.specialbays = [bay6Compact,bay7Medium,bay8Full,bay9Class1Truck,bay10Class2Truck]
        self.month = month
        self.day = day

    def schedule(self):
        for entry in self.entryForDay:
            if entry.outTime() > datetime(2022,self.month,self.day,19):
                break
            if entry.inTime() < datetime(2022,self.month,self.day,7):
                break
            for bay in self.bays:
                if bay.schedule == []:
                    bay.addEntry(entry)
                    break
                for existingEntry in bay.schedule:
                    if entry.checkOverlap(existingEntry) == False:
                        bay.addEntry(entry)
            for specialBay in self.specialbays:
                if entry.type == specialBay.restrictionType:
                    specialBay.addEntry(entry)
                    
        for bay in self.bay:
            for existingEntry in bay.schedule:
                existingEntry.state = True

print([[bay1.schedule,bay2.schedule,bay3.schedule,bay4.schedule,bay5.schedule, 
        bay6Compact.schedule,bay7Medium.schedule,bay8Full.schedule,bay9Class1Truck.schedule,bay10Class2Truck.schedule]])
        

    
    





if __name__ == "__main__":
    mybay = Bay()
    print(mybay.id)
    mybay2 = SpecialBay("class 2 truck")
    print(mybay2.id)
    myEntry = Entry(1,"2022-10-30 7:08","class 2 truck","2022-11-23 16:22",False)
    print(myEntry.outTime())
    print(myEntry.getWalkin())
    