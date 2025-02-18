import { InteractionData } from '@pixi/interaction';
import { DisplayObject } from '@pixi/display';
import { Point } from '@pixi/math';

import '@pixi/canvas-display';

describe('InteractionData', () =>
{
    describe('getLocalPosition', () =>
    {
        it('should populate second parameter with result', () =>
        {
            const data = new InteractionData();
            // @ts-expect-error - instantiating DisplayObject
            const stage = new DisplayObject();
            // @ts-expect-error - instantiating DisplayObject
            const displayObject = new DisplayObject();
            const point = new Point();

            data.global.set(10, 10);
            displayObject.position.set(5, 3);
            displayObject.parent = stage;
            displayObject.displayObjectUpdateTransform();
            data.getLocalPosition(displayObject, point);
            expect(point.x).toEqual(5);
            expect(point.y).toEqual(7);
        });
    });
});
