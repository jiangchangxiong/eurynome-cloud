/*
 * Copyright 2019-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * Project Name: luban-cloud
 * Module Name: luban-cloud-upms-logic
 * File Name: WeappUserService.java
 * Author: gengwei.zheng
 * Date: 2019/11/19 上午11:03
 * LastModified: 2019/11/19 上午10:59
 */

package cn.herodotus.eurynome.upms.logic.service.social;

import cn.herodotus.eurynome.data.base.repository.BaseRepository;
import cn.herodotus.eurynome.crud.service.BaseService;
import cn.herodotus.eurynome.upms.api.constants.UpmsConstants;
import cn.herodotus.eurynome.upms.api.entity.social.WeappUser;
import cn.herodotus.eurynome.upms.logic.repository.social.WeappUserRepository;
import com.alicp.jetcache.Cache;
import com.alicp.jetcache.anno.CacheType;
import com.alicp.jetcache.anno.CreateCache;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Slf4j
@Service
public class WeappUserService extends BaseService<WeappUser, String> {

    private static final String CACHE_NAME = UpmsConstants.CACHE_NAME_WEAPP_USER;

    @CreateCache(name = CACHE_NAME, expire = UpmsConstants.DEFAULT_UPMS_CACHE_EXPIRE, cacheType = CacheType.BOTH, localLimit = UpmsConstants.DEFAULT_UPMS_LOCAL_LIMIT)
    private Cache<String, WeappUser> dataCache;

    @CreateCache(name = CACHE_NAME + UpmsConstants.INDEX_CACHE_NAME, expire = UpmsConstants.DEFAULT_UPMS_CACHE_EXPIRE, cacheType = CacheType.BOTH, localLimit = UpmsConstants.DEFAULT_UPMS_LOCAL_LIMIT)
    private Cache<String, Set<String>> indexCache;

    private final WeappUserRepository weappUserRepository;

    @Autowired
    public WeappUserService(WeappUserRepository weappUserRepository) {
        this.weappUserRepository = weappUserRepository;
    }

    @Override
    public Cache<String, WeappUser> getCache() {
        return this.dataCache;
    }

    @Override
    public Cache<String, Set<String>> getIndexCache() {
        return this.indexCache;
    }

    @Override
    public BaseRepository<WeappUser, String> getRepository() {
        return this.weappUserRepository;
    }
}
