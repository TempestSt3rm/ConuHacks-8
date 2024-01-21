from bay import *
from entry import *

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
    def __init__(self,entryForDay):
        self.entryForDay = entryForDay
        self.bays = [bay1,bay2,bay3,bay4,bay5,bay6Compact,bay7Medium,bay8Full,bay9Class1Truck,bay10Class2Truck]

    def schedule(self):
        for entry in self.entryForDay:
            for bay in self.bays:
                if bay.schedule == []:
                    bay.addEntry(entry)
                    break
                elif bay.schedule[-1].outTime() < entry.inTime :
                    bay.addEntry(entry)
                    break
                elif bay.schedule[-1].outTime() > entry.inTime:
                    continue
                else:
                    print("no bay available")
                    break

    
    





if __name__ == "__main__":
    mybay = Bay()
    print(mybay.id)
    mybay2 = SpecialBay("class 2 truck")
    print(mybay2.id)
    myEntry = Entry(1,"2022-10-30 7:08","class 2 truck","2022-11-23 16:22",False)
    print(myEntry.outTime())
    print(myEntry.getWalkin())
    