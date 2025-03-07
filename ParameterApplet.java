import java.applet.Applet;
import java.awt.Graphics;
import java.awt.Color;

/*
<applet code="ParameterApplet" width=300 height=200>
   <param name="message" value="Hello, Applet with Parameters!">
   <param name="color" value="red">
</applet>
*/
public class ParameterApplet extends Applet {
    String message;
    String color;

    public void init() {
        message = getParameter("message"); // Getting the message parameter
        if (message == null) {
            message = "Default Message";
        }

        color = getParameter("color"); // Getting the color parameter
        if (color == null) {
            color = "black"; // Default color
        }
    }

    public void paint(Graphics g) {
        if (color.equalsIgnoreCase("red")) {
            g.setColor(Color.RED);
        } else if (color.equalsIgnoreCase("blue")) {
            g.setColor(Color.BLUE);
        } else if (color.equalsIgnoreCase("green")) {
            g.setColor(Color.GREEN);
        } else {
            g.setColor(Color.BLACK);
        }
        g.drawString("Message: " + message, 50, 50);
        g.drawString("Color: " + color, 50, 70);
    }
}