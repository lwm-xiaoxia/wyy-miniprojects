"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        logs: [],
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return util_1.formatTime(new Date(log));
            }),
        });
    },
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ3MvbG9ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlDQUE2QztBQUU3QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtLQUNUO0lBQ0QsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVc7Z0JBQ3RELE9BQU8saUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ2xDLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJmaWxlIjoicGFnZXMvbG9ncy9sb2dzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9ncy50c1xuLy8gY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWwuanMnKVxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbG9nczogW10sXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbG9nczogKHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW10pLm1hcCgobG9nOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWUobmV3IERhdGUobG9nKSlcbiAgICAgIH0pLFxuICAgIH0pXG4gIH0sXG59KVxuIl19
