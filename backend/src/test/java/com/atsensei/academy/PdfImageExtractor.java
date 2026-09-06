package com.atsensei.academy;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDResources;
import org.apache.pdfbox.pdmodel.graphics.PDXObject;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;
import org.apache.pdfbox.cos.COSName;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;

public class PdfImageExtractor {
    public static void main(String[] args) {
        try {
            File pdfFile = new File("..\\source\\AT Sensei Academy.pdf");
            if (!pdfFile.exists()) {
                pdfFile = new File("source\\AT Sensei Academy.pdf");
            }
            System.out.println("Opening PDF: " + pdfFile.getAbsolutePath());
            PDDocument document = Loader.loadPDF(pdfFile);

            File outputDir = new File("..\\frontend\\public\\images\\extracted");
            outputDir.mkdirs();
            File mentorDir = new File("..\\frontend\\public\\images\\mentors");
            mentorDir.mkdirs();

            int pageNum = 0;
            int totalImages = 0;
            for (PDPage page : document.getPages()) {
                pageNum++;
                PDResources resources = page.getResources();
                if (resources != null) {
                    for (COSName cosName : resources.getXObjectNames()) {
                        PDXObject xobject = resources.getXObject(cosName);
                        if (xobject instanceof PDImageXObject) {
                            PDImageXObject image = (PDImageXObject) xobject;
                            BufferedImage bImage = image.getImage();
                            totalImages++;
                            String filename = String.format("page_%d_img_%d_%dx%d.png", 
                                pageNum, totalImages, bImage.getWidth(), bImage.getHeight());
                            File outFile = new File(outputDir, filename);
                            ImageIO.write(bImage, "PNG", outFile);
                            System.out.println("Saved page " + pageNum + " (" + bImage.getWidth() + "x" + bImage.getHeight() + ") -> " + outFile.getAbsolutePath());
                        }
                    }
                }
            }
            document.close();
            System.out.println("Successfully extracted " + totalImages + " images from PDF!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
