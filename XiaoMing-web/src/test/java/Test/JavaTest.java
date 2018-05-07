package Test;

import javafx.beans.binding.ObjectExpression;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class JavaTest {
//    public static void sort(int[] arr){
//        for(int i=0;i<arr.length-1;i++){
//            for(int j=0;j<arr.length-i-1;j++){
//                int temp;
//                if(arr[j]>arr[j+1]){
//                    temp = arr[j];
//                    arr[j] = arr[j+1];
//                    arr[j+1] = temp;
//                }
//            }
//        }
//    }
//
    public static int getIndex(int[] arr,int a){
        int start = 0;
        int end = arr.length-1;
        for(int i=0;i<arr.length-1;i++){
            int middle =(start+end)/2;
            if(arr[middle]==a){
                return middle;
            }
            if(arr[middle]>a){
                end = middle - 1;
            }
            if (arr[middle]<a){
                start = middle +1;
            }
        }
        return -1;
    }

    public static int getIndex(int[] arr,int left,int right){
        int key = arr[left];
        while(left<right){
            while (key<=arr[right]&&left<right){
                right--;
            }
            arr[left] = arr[right];

            while (key>=arr[left]&&left<right){
                left++;
            }
            arr[right] = arr[left];
        }
        arr[right] = key;
        return right;
    }

    public static void sort(int[] arr,int left,int right){
        if(left>=right){
            return;
        }
        int index = getIndex(arr,left,right);
        sort(arr,left,index-1);
        sort(arr,index+1,right);
    }
    static void isColor(Color color){
        switch (color){
            case RED:System.out.println("Red");break;
            case BLANK:System.out.println("BLANK");break;
        }
    }
    public static void test1(int a){
        a=++a;
        System.out.println("a1:"+a);
    }

    public static void test2(Mono o){
        o.p=100;
        System.out.println("p1"+o.p);
    }



    public static void main(String[] args){
       Mono mono = new Mono();

//        int a[]={3,2,6,5,8,9,0,1,4};
//        sort(a,0,a.length-1);
//        for(int c:a){
//            System.out.println(c);
//        }
    }
}
