package com.sample.generic;

import com.sample.model.json.JSONResult;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.util.List;

public abstract class GenericWebService<T extends Serializable> {
    private final GenericService<T> service;

    protected GenericWebService(GenericService<T> service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<T> list() {
        return service.list();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public T get(@PathVariable Long id) {
        return  service.findById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public T update(@PathVariable Long id, @RequestBody T item) {
        return service.update(item);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public T create(@RequestBody T item) {
        return (T)service.create(item);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity handleException(HttpServletRequest request, Exception e) {
        return new ResponseEntity<>(new JSONResult(e.getMessage(), false), HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
