/**
 * @typedef {!{
 *              renderEvent:function(SSASubtitleEvent,number):void,
 *              setDPI:function(number):void,
 *              getOffset:function():Array<number>,
 *              getDimensions:function():Array<number>,
 *              getImage:function():HTMLCanvasElement
 *          }}
 */
var Canvas2DShapeRenderer;

/**
 * @type {function(new:Canvas2DShapeRenderer)}
 */
sabre.Canvas2DShapeRenderer = function () {};
