from datetime import datetime, timedelta


class Entry():

    def __init__(self,ID,timeStamp,type,inTime,state):
        self.ID = ID
        self.timeStamp = datetime.strptime(timeStamp, '%Y-%m-%d %H:%M')
        self.type = type
        self.inTime = datetime.strptime(inTime, '%Y-%m-%d %H:%M')
        self.state = state

    def outTime(self):
    
        COMPACT_CAR_TIME = MEDIUM_CAR_TIME = FULL_SIZE_CAR = 30
        CLASS1_TRUCK_TIME = 60
        CLASS2_TRUCK_TIME = 120
        COMPACT_CAR_CHARGE = MEDIUM_CAR_CHARGE = FULL_SIZE_CAR_CHARGE = 150
        CLASS1_TRUCK_CHARGE = 250
        CLASS2_TRUCK_CHARGE = 750
        """
        Calculates the service end time for a vehicle type.
        """

        if self.type == 'compact':
            endPoint = timedelta(minutes=COMPACT_CAR_TIME) + self.inTime
            return endPoint
        elif self.type == 'medium':
            endPoint = timedelta(minutes=MEDIUM_CAR_TIME) + self.inTime
            return endPoint
        elif self.type == 'full-size':
            endPoint = timedelta(minutes=FULL_SIZE_CAR) + self.inTime
            return endPoint
        elif self.type == 'class 1 truck':
            endPoint = timedelta(minutes = CLASS1_TRUCK_TIME) + self.inTime
            return endPoint
        elif self.type == 'class 2 truck':
            endPoint = timedelta(minutes = CLASS2_TRUCK_TIME) + self.inTime
            return endPoint
        else:
            raise ValueError(f"Unrecognized vehicle type: {self.type}")
    
    def checkOverlap(self,entry):
        if self.outTime() > entry.inTime:
            return True
        else:
            return False

    def getWalkin(self):
        if self.inTime == self.timeStamp:
            return True
        else:
            return False

#2022-10-21 14:56,2022-11-23 16:22,
if __name__ == "__main__":
    myEntry = Entry(1,"2022-10-30 7:08","class 2 truck","2022-11-23 16:22",False)
    print(myEntry.outTime())
    print(myEntry.getWalkin())

